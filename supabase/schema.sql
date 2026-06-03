-- Campiq launch schema for Supabase.
-- Run this once in the Supabase SQL Editor before deploying production traffic.

create extension if not exists pgcrypto;

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  listing_type text,
  post_mode text default 'offer',
  name text,
  area text,
  address text,
  location text,
  lease_type text,
  bedrooms numeric,
  bathrooms numeric,
  room_format text,
  price numeric default 0,
  min_budget numeric default 0,
  max_budget numeric default 0,
  move_in_date text,
  utilities text,
  parking text,
  ev_charging text,
  pets text,
  gender_preference text,
  nearby_bus text,
  living_room_as_bedroom text,
  description text,
  title_en text,
  title_zh text,
  listing_type_en text,
  listing_type_zh text,
  description_en text,
  description_zh text,
  tags_en text[] default '{}',
  tags_zh text[] default '{}',
  translations jsonb default '{}'::jsonb,
  translation_status text default 'pending',
  translated_at timestamptz,
  contact_info jsonb default '{}'::jsonb,
  images text[] default '{}',
  tags text[] default '{}',
  verified boolean default false,
  created_by uuid references auth.users(id) on delete set null,
  user_email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.housing_requests (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  name text,
  area text,
  preferred_room_type text,
  lease_type text,
  min_budget numeric default 0,
  max_budget numeric default 0,
  move_in_date text,
  gender_preference text,
  pets text,
  nearby_bus text,
  description text,
  contact_info jsonb default '{}'::jsonb,
  tags text[] default '{}',
  status text default 'open',
  created_by uuid references auth.users(id) on delete set null,
  user_email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roommates (
  id uuid primary key default gen_random_uuid(),
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forum_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.forum_posts(id) on delete cascade not null,
  body text not null,
  created_by uuid references auth.users(id) on delete set null,
  user_email text,
  read_by_owner boolean default false,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  participant_a uuid references auth.users(id) on delete cascade not null,
  participant_b uuid references auth.users(id) on delete cascade not null,
  subject text,
  context_type text,
  context_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint conversations_distinct_participants check (participant_a <> participant_b)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references public.conversations(id) on delete cascade not null,
  sender_id uuid references auth.users(id) on delete cascade not null,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  item_id text not null,
  item_type text not null,
  title text,
  subtitle text,
  data jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (user_id, item_id, item_type)
);

create table if not exists public.translation_usage_logs (
  id uuid primary key default gen_random_uuid(),
  listing_id text,
  model text not null,
  input_tokens integer default 0,
  output_tokens integer default 0,
  estimated_cost_usd numeric default 0,
  created_at timestamptz not null default now()
);

create index if not exists listings_created_at_idx on public.listings (created_at desc);
create index if not exists listings_created_by_idx on public.listings (created_by);
create index if not exists housing_requests_created_at_idx on public.housing_requests (created_at desc);
create index if not exists housing_requests_created_by_idx on public.housing_requests (created_by);
create index if not exists roommates_created_at_idx on public.roommates (created_at desc);
create index if not exists roommates_created_by_idx on public.roommates ((data->>'created_by'));
create index if not exists forum_posts_created_at_idx on public.forum_posts (created_at desc);
create index if not exists forum_posts_created_by_idx on public.forum_posts ((data->>'created_by'));
create index if not exists forum_comments_post_id_idx on public.forum_comments (post_id);
create index if not exists forum_comments_created_by_idx on public.forum_comments (created_by);
create index if not exists forum_comments_created_at_idx on public.forum_comments (created_at desc);
create unique index if not exists conversations_participants_context_idx
  on public.conversations (
    least(participant_a, participant_b),
    greatest(participant_a, participant_b),
    coalesce(context_type, ''),
    coalesce(context_id, '')
  );
create index if not exists conversations_participant_a_idx on public.conversations (participant_a);
create index if not exists conversations_participant_b_idx on public.conversations (participant_b);
create index if not exists messages_conversation_id_idx on public.messages (conversation_id);
create index if not exists messages_sender_id_idx on public.messages (sender_id);
create index if not exists messages_created_at_idx on public.messages (created_at);
create index if not exists favorites_user_id_idx on public.favorites (user_id);
create index if not exists translation_usage_logs_created_at_idx on public.translation_usage_logs (created_at desc);

alter table public.listings enable row level security;
alter table public.housing_requests enable row level security;
alter table public.roommates enable row level security;
alter table public.forum_posts enable row level security;
alter table public.forum_comments enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.favorites enable row level security;

drop policy if exists "Public listings are readable" on public.listings;
create policy "Public listings are readable"
  on public.listings for select
  using (true);

drop policy if exists "Authenticated users can create listings" on public.listings;
create policy "Authenticated users can create listings"
  on public.listings for insert
  to authenticated
  with check (auth.uid() = created_by);

drop policy if exists "Users can update own listings" on public.listings;
create policy "Users can update own listings"
  on public.listings for update
  to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

drop policy if exists "Public housing requests are readable" on public.housing_requests;
create policy "Public housing requests are readable"
  on public.housing_requests for select
  using (true);

drop policy if exists "Authenticated users can create housing requests" on public.housing_requests;
create policy "Authenticated users can create housing requests"
  on public.housing_requests for insert
  to authenticated
  with check (auth.uid() = created_by);

drop policy if exists "Users can update own housing requests" on public.housing_requests;
create policy "Users can update own housing requests"
  on public.housing_requests for update
  to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by);

drop policy if exists "Public roommate posts are readable" on public.roommates;
create policy "Public roommate posts are readable"
  on public.roommates for select
  using (true);

drop policy if exists "Authenticated users can create roommate posts" on public.roommates;
create policy "Authenticated users can create roommate posts"
  on public.roommates for insert
  to authenticated
  with check ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Users can update own roommate posts" on public.roommates;
create policy "Users can update own roommate posts"
  on public.roommates for update
  to authenticated
  using ((data->>'created_by') = auth.uid()::text)
  with check ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Users can delete own roommate posts" on public.roommates;
create policy "Users can delete own roommate posts"
  on public.roommates for delete
  to authenticated
  using ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Public forum posts are readable" on public.forum_posts;
create policy "Public forum posts are readable"
  on public.forum_posts for select
  using (true);

drop policy if exists "Authenticated users can create forum posts" on public.forum_posts;
create policy "Authenticated users can create forum posts"
  on public.forum_posts for insert
  to authenticated
  with check ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Users can update own forum posts" on public.forum_posts;
create policy "Users can update own forum posts"
  on public.forum_posts for update
  to authenticated
  using ((data->>'created_by') = auth.uid()::text)
  with check ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Users can delete own forum posts" on public.forum_posts;
create policy "Users can delete own forum posts"
  on public.forum_posts for delete
  to authenticated
  using ((data->>'created_by') = auth.uid()::text);

drop policy if exists "Public forum comments are readable" on public.forum_comments;
create policy "Public forum comments are readable"
  on public.forum_comments for select
  using (true);

drop policy if exists "Authenticated users can create forum comments" on public.forum_comments;
create policy "Authenticated users can create forum comments"
  on public.forum_comments for insert
  to authenticated
  with check (auth.uid() = created_by);

drop policy if exists "Users can delete own forum comments" on public.forum_comments;
create policy "Users can delete own forum comments"
  on public.forum_comments for delete
  to authenticated
  using (auth.uid() = created_by);

drop policy if exists "Users can read own conversations" on public.conversations;
create policy "Users can read own conversations"
  on public.conversations for select
  to authenticated
  using (auth.uid() = participant_a or auth.uid() = participant_b);

drop policy if exists "Users can create own conversations" on public.conversations;
create policy "Users can create own conversations"
  on public.conversations for insert
  to authenticated
  with check (auth.uid() = participant_a or auth.uid() = participant_b);

drop policy if exists "Users can update own conversations" on public.conversations;
create policy "Users can update own conversations"
  on public.conversations for update
  to authenticated
  using (auth.uid() = participant_a or auth.uid() = participant_b)
  with check (auth.uid() = participant_a or auth.uid() = participant_b);

drop policy if exists "Users can read messages in own conversations" on public.messages;
create policy "Users can read messages in own conversations"
  on public.messages for select
  to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  );

drop policy if exists "Users can send messages in own conversations" on public.messages;
create policy "Users can send messages in own conversations"
  on public.messages for insert
  to authenticated
  with check (
    auth.uid() = sender_id
    and exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  );

drop policy if exists "Users can mark own conversation messages read" on public.messages;
create policy "Users can mark own conversation messages read"
  on public.messages for update
  to authenticated
  using (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  )
  with check (
    exists (
      select 1 from public.conversations c
      where c.id = conversation_id
        and (c.participant_a = auth.uid() or c.participant_b = auth.uid())
    )
  );

drop policy if exists "Users can read own favorites" on public.favorites;
create policy "Users can read own favorites"
  on public.favorites for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can create own favorites" on public.favorites;
create policy "Users can create own favorites"
  on public.favorites for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own favorites" on public.favorites;
create policy "Users can delete own favorites"
  on public.favorites for delete
  to authenticated
  using (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('listing-images', 'listing-images', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public listing images are readable" on storage.objects;
create policy "Public listing images are readable"
  on storage.objects for select
  using (bucket_id = 'listing-images');

drop policy if exists "Authenticated users can upload listing images" on storage.objects;
create policy "Authenticated users can upload listing images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'listing-images');
