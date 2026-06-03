const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-translation-admin-token",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type ListingRow = {
  id: string | number;
  title?: string;
  listing_type?: string;
  description?: string;
  tags?: string[];
  created_by?: string;
};

type TranslationPayload = {
  title_en: string;
  title_zh: string;
  listing_type_en: string;
  listing_type_zh: string;
  description_en: string;
  description_zh: string;
  tags_en: string[];
  tags_zh: string[];
};

type OpenAIUsage = {
  input_tokens?: number;
  output_tokens?: number;
  inputTokens?: number;
  outputTokens?: number;
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function env(name: string) {
  return Deno.env.get(name) || "";
}

function serviceRoleKey() {
  return env("SERVICE_ROLE_KEY") || env("SUPABASE_SERVICE_ROLE_KEY");
}

function assertConfigured() {
  const missing = ["SUPABASE_URL", "OPENAI_API_KEY"].filter((key) => !env(key));
  if (!serviceRoleKey()) missing.push("SERVICE_ROLE_KEY");
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

function getListingFilter(listingId?: string | number) {
  if (listingId === undefined || listingId === null || listingId === "") {
    return "post_mode=not.eq.seek&translation_status=not.eq.done&order=created_at.desc";
  }
  return `id=eq.${encodeURIComponent(String(listingId))}`;
}

function getMonthlyBudgetUsd() {
  return Number(env("OPENAI_MONTHLY_TRANSLATION_BUDGET_USD") || "5");
}

function getCurrentMonthStartIso() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
}

function getTokenCostUsd(model: string, usage: OpenAIUsage = {}) {
  const inputTokens = usage.input_tokens ?? usage.inputTokens ?? 0;
  const outputTokens = usage.output_tokens ?? usage.outputTokens ?? 0;
  const inputPerMillion = Number(env("OPENAI_TRANSLATION_INPUT_USD_PER_1M") || "0.05");
  const outputPerMillion = Number(env("OPENAI_TRANSLATION_OUTPUT_USD_PER_1M") || "0.40");
  return {
    model,
    inputTokens,
    outputTokens,
    estimatedCostUsd: (inputTokens / 1_000_000) * inputPerMillion + (outputTokens / 1_000_000) * outputPerMillion,
  };
}

async function fetchMonthlyTranslationSpend() {
  const response = await fetch(
    `${env("SUPABASE_URL")}/rest/v1/translation_usage_logs?select=estimated_cost_usd&created_at=gte.${encodeURIComponent(getCurrentMonthStartIso())}`,
    {
      headers: {
        apikey: serviceRoleKey(),
        authorization: `Bearer ${serviceRoleKey()}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Failed to read translation usage: ${await response.text()}`);
  }
  const rows = await response.json() as Array<{ estimated_cost_usd?: number | string }>;
  return rows.reduce((sum, row) => sum + Number(row.estimated_cost_usd || 0), 0);
}

async function assertUnderMonthlyBudget() {
  const monthlySpend = await fetchMonthlyTranslationSpend();
  const monthlyBudget = getMonthlyBudgetUsd();
  if (monthlySpend >= monthlyBudget) {
    throw new Error(`Monthly translation budget reached: $${monthlySpend.toFixed(4)} / $${monthlyBudget.toFixed(2)}`);
  }
  return { monthlySpend, monthlyBudget };
}

async function logTranslationUsage(listingId: string | number, model: string, usage: OpenAIUsage = {}) {
  const cost = getTokenCostUsd(model, usage);
  const response = await fetch(`${env("SUPABASE_URL")}/rest/v1/translation_usage_logs`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey(),
      authorization: `Bearer ${serviceRoleKey()}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      listing_id: String(listingId),
      model,
      input_tokens: cost.inputTokens,
      output_tokens: cost.outputTokens,
      estimated_cost_usd: cost.estimatedCostUsd,
    }),
  });
  if (!response.ok) {
    throw new Error(`Failed to log translation usage: ${await response.text()}`);
  }
  return cost;
}

async function fetchListings(listingId?: string | number, limit = 10) {
  const url = `${env("SUPABASE_URL")}/rest/v1/listings?select=*&${getListingFilter(listingId)}&limit=${Math.max(1, Math.min(limit, 50))}`;
  const response = await fetch(url, {
    headers: {
      apikey: serviceRoleKey(),
      authorization: `Bearer ${serviceRoleKey()}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch listings: ${await response.text()}`);
  }
  return await response.json() as ListingRow[];
}

async function fetchUserIdFromRequest(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!authorization.toLowerCase().startsWith("bearer ")) return "";

  const response = await fetch(`${env("SUPABASE_URL")}/auth/v1/user`, {
    headers: {
      apikey: serviceRoleKey(),
      authorization,
    },
  });
  if (!response.ok) return "";

  const user = await response.json() as { id?: string };
  return user.id || "";
}

function canTranslateListings(listings: ListingRow[], userId: string, isAdmin: boolean) {
  if (isAdmin) return true;
  return listings.length === 1 && !!userId && String(listings[0]?.created_by || "") === userId;
}

async function updateListing(id: string | number, translation: TranslationPayload) {
  const response = await fetch(`${env("SUPABASE_URL")}/rest/v1/listings?id=eq.${encodeURIComponent(String(id))}`, {
    method: "PATCH",
    headers: {
      apikey: serviceRoleKey(),
      authorization: `Bearer ${serviceRoleKey()}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      ...translation,
      translations: {
        en: {
          title: translation.title_en,
          listing_type: translation.listing_type_en,
          description: translation.description_en,
          tags: translation.tags_en,
        },
        zh: {
          title: translation.title_zh,
          listing_type: translation.listing_type_zh,
          description: translation.description_zh,
          tags: translation.tags_zh,
        },
      },
      translation_status: "done",
      translated_at: new Date().toISOString(),
    }),
  });
  if (!response.ok) {
    throw new Error(`Failed to update listing ${id}: ${await response.text()}`);
  }
}

function extractOutputText(data: any) {
  if (typeof data?.output_text === "string") return data.output_text;
  const parts = data?.output?.flatMap((item: any) => item?.content || []) || [];
  return parts.map((part: any) => part?.text || "").join("\n").trim();
}

function parseTranslation(text: string): TranslationPayload {
  const cleaned = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
  const parsed = JSON.parse(cleaned);
  return {
    title_en: String(parsed.title_en || ""),
    title_zh: String(parsed.title_zh || ""),
    listing_type_en: String(parsed.listing_type_en || ""),
    listing_type_zh: String(parsed.listing_type_zh || ""),
    description_en: String(parsed.description_en || ""),
    description_zh: String(parsed.description_zh || ""),
    tags_en: Array.isArray(parsed.tags_en) ? parsed.tags_en.map(String) : [],
    tags_zh: Array.isArray(parsed.tags_zh) ? parsed.tags_zh.map(String) : [],
  };
}

async function translateListing(listing: ListingRow): Promise<{ translation: TranslationPayload; model: string; usage: OpenAIUsage }> {
  const model = env("OPENAI_TRANSLATION_MODEL") || "gpt-5-nano";
  const input = [
    {
      role: "system",
      content:
        "You translate student housing listings for Campiq. Return only valid JSON. Preserve prices, addresses, dates, names, URLs, phone numbers, Instagram handles, and proper nouns. Make Chinese natural Simplified Chinese. Make English natural American English. Do not add facts.",
    },
    {
      role: "user",
      content: JSON.stringify({
        title: listing.title || "",
        listing_type: listing.listing_type || "",
        description: listing.description || "",
        tags: listing.tags || [],
        output_schema: {
          title_en: "string",
          title_zh: "string",
          listing_type_en: "string",
          listing_type_zh: "string",
          description_en: "string",
          description_zh: "string",
          tags_en: ["string"],
          tags_zh: ["string"],
        },
      }),
    },
  ];

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env("OPENAI_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input,
      text: {
        format: {
          type: "json_schema",
          name: "listing_translation",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              title_en: { type: "string" },
              title_zh: { type: "string" },
              listing_type_en: { type: "string" },
              listing_type_zh: { type: "string" },
              description_en: { type: "string" },
              description_zh: { type: "string" },
              tags_en: { type: "array", items: { type: "string" } },
              tags_zh: { type: "array", items: { type: "string" } },
            },
            required: ["title_en", "title_zh", "listing_type_en", "listing_type_zh", "description_en", "description_zh", "tags_en", "tags_zh"],
          },
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI translation failed: ${await response.text()}`);
  }
  const data = await response.json();
  return {
    translation: parseTranslation(extractOutputText(data)),
    model,
    usage: data?.usage || {},
  };
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    assertConfigured();
    const adminToken = env("TRANSLATION_ADMIN_TOKEN");
    const body = await request.json().catch(() => ({}));
    const isAdmin = !!adminToken && request.headers.get("x-translation-admin-token") === adminToken;
    const userId = isAdmin ? "" : await fetchUserIdFromRequest(request);
    if (!isAdmin && !body.listing_id) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    const listings = await fetchListings(body.listing_id, body.limit || 10);
    if (!canTranslateListings(listings, userId, isAdmin)) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    const results = [];

    for (const listing of listings) {
      try {
        await assertUnderMonthlyBudget();
        const { translation, model, usage } = await translateListing(listing);
        await updateListing(listing.id, translation);
        const cost = await logTranslationUsage(listing.id, model, usage);
        results.push({ id: listing.id, status: "done", estimated_cost_usd: cost.estimatedCostUsd });
      } catch (error) {
        results.push({ id: listing.id, status: "error", error: error instanceof Error ? error.message : String(error) });
      }
    }

    const monthlySpend = await fetchMonthlyTranslationSpend();
    return jsonResponse({ translated: results.filter((item) => item.status === "done").length, monthly_budget_usd: getMonthlyBudgetUsd(), monthly_spend_usd: monthlySpend, results });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
