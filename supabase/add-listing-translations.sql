-- Add cached bilingual translation fields for listing display.
-- Run this in the Supabase SQL Editor before using the translate-listing Edge Function.

alter table public.listings add column if not exists title_en text;
alter table public.listings add column if not exists title_zh text;
alter table public.listings add column if not exists listing_type_en text;
alter table public.listings add column if not exists listing_type_zh text;
alter table public.listings add column if not exists description_en text;
alter table public.listings add column if not exists description_zh text;
alter table public.listings add column if not exists tags_en text[] default '{}';
alter table public.listings add column if not exists tags_zh text[] default '{}';
alter table public.listings add column if not exists translations jsonb default '{}'::jsonb;
alter table public.listings add column if not exists translation_status text default 'pending';
alter table public.listings add column if not exists translated_at timestamptz;

update public.listings
set translation_status = coalesce(translation_status, 'pending')
where translation_status is null;

create table if not exists public.translation_usage_logs (
  id uuid primary key default gen_random_uuid(),
  listing_id text,
  model text not null,
  input_tokens integer default 0,
  output_tokens integer default 0,
  estimated_cost_usd numeric default 0,
  created_at timestamptz not null default now()
);

create index if not exists translation_usage_logs_created_at_idx
  on public.translation_usage_logs (created_at desc);
