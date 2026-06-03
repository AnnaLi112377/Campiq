-- Temporary policy for Campiq cold-start listing imports.
-- Use this before public launch so the admin import page can add outside-source
-- listings without attaching them to the founder's personal account.
--
-- Important: remove this policy before opening the site publicly, or replace it
-- with a proper admin-only Edge Function using a service-role key.

drop policy if exists "Cold-start manual imports can create unattributed listings" on public.listings;

create policy "Cold-start manual imports can create unattributed listings"
  on public.listings for insert
  to public
  with check (
    created_by is null
    and user_email is null
    and coalesce(verified, false) = false
  );

drop policy if exists "Cold-start manual imports can create unattributed roommates" on public.roommates;

create policy "Cold-start manual imports can create unattributed roommates"
  on public.roommates for insert
  to public
  with check (
    coalesce(data->>'created_by', '') = ''
    and coalesce(data->>'user_email', '') = ''
    and data->'tags' ? 'Cold start import'
  );
