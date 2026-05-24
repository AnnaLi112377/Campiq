# Campiq Improved MVP

This is the improved deployable Campiq MVP.

Changes:
- Removed the empty JSX comment in the header.
- Added a mobile hamburger menu.
- Fixed the duplicate roommate id issue.
- Added basic demo form state for Join and Report flows.
- Kept the original Campiq MVP visual structure and bilingual content.

Deploy with Vercel.

## Launch checklist

1. In Supabase, run `supabase/schema.sql` from this repo in the SQL Editor.
2. If Supabase reports a missing column on an old existing table, run `supabase/repair-existing-db.sql`.
3. Confirm the `listing-images` storage bucket exists and is public.
4. In Vercel, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to match `.env`.
5. Run `npm.cmd run build` locally before deploying.
6. Deploy with Vercel and test the live Housing, Roommates, Forum, and Me pages.
