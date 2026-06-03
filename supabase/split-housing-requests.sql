create table if not exists public.housing_requests (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
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
  updated_at timestamptz not null default now()
);

insert into public.housing_requests (
  title,
  name,
  area,
  preferred_room_type,
  lease_type,
  min_budget,
  max_budget,
  move_in_date,
  gender_preference,
  pets,
  nearby_bus,
  description,
  contact_info,
  tags,
  status,
  created_by,
  user_email,
  created_at,
  updated_at
)
select
  title,
  name,
  area,
  listing_type,
  lease_type,
  min_budget,
  max_budget,
  move_in_date,
  gender_preference,
  pets,
  nearby_bus,
  description,
  contact_info,
  tags,
  'open',
  created_by,
  user_email,
  created_at,
  updated_at
from public.listings
where post_mode = 'seek'
  and not exists (
    select 1
    from public.housing_requests hr
    where hr.title = public.listings.title
      and coalesce(hr.created_by::text, '') = coalesce(public.listings.created_by::text, '')
      and coalesce(hr.created_at::text, '') = coalesce(public.listings.created_at::text, '')
  );

delete from public.listings
where post_mode = 'seek';

create index if not exists housing_requests_created_at_idx on public.housing_requests (created_at desc);
create index if not exists housing_requests_created_by_idx on public.housing_requests (created_by);

alter table public.housing_requests enable row level security;

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

drop policy if exists "Users can delete own housing requests" on public.housing_requests;
create policy "Users can delete own housing requests"
  on public.housing_requests for delete
  to authenticated
  using (auth.uid() = created_by);
