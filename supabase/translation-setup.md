# Campiq listing translation setup

This setup keeps OpenAI keys on the server and stores translated listing text in Supabase.

## 1. Add database columns

Run `supabase/add-listing-translations.sql` in the Supabase SQL Editor.

## 2. Set Edge Function secrets

Set these secrets for the Supabase project:

```bash
supabase secrets set OPENAI_API_KEY=sk-...
supabase secrets set OPENAI_TRANSLATION_MODEL=gpt-5-nano
supabase secrets set OPENAI_MONTHLY_TRANSLATION_BUDGET_USD=5
supabase secrets set OPENAI_TRANSLATION_INPUT_USD_PER_1M=0.05
supabase secrets set OPENAI_TRANSLATION_OUTPUT_USD_PER_1M=0.40
supabase secrets set TRANSLATION_ADMIN_TOKEN=choose-a-long-random-token
```

Supabase automatically provides `SUPABASE_URL`. Add the service role key as `SERVICE_ROLE_KEY` because Supabase does not allow custom secret names that start with `SUPABASE_`.

`OPENAI_MONTHLY_TRANSLATION_BUDGET_USD=5` is the app-side hard stop. The function logs each successful translation in `translation_usage_logs` and stops calling OpenAI once the current UTC month reaches $5.

## 3. Deploy the function

```bash
supabase functions deploy translate-listing
```

## 4. Translate listings

Newly submitted housing listings now call `translate-listing` automatically from the website after the listing is created. The Edge Function allows the signed-in listing owner to translate that one listing, while batch translation still requires `TRANSLATION_ADMIN_TOKEN`.

Translate one listing:

```bash
curl -X POST "https://YOUR_PROJECT_REF.functions.supabase.co/translate-listing" \
  -H "Content-Type: application/json" \
  -H "x-translation-admin-token: YOUR_ADMIN_TOKEN" \
  -d "{\"listing_id\":\"LISTING_ID\"}"
```

Translate the next pending batch:

```bash
curl -X POST "https://YOUR_PROJECT_REF.functions.supabase.co/translate-listing" \
  -H "Content-Type: application/json" \
  -H "x-translation-admin-token: YOUR_ADMIN_TOKEN" \
  -d "{\"limit\":10}"
```

The frontend now prefers `title_en/title_zh`, `listing_type_en/listing_type_zh`, `description_en/description_zh`, and `tags_en/tags_zh` when they exist.
