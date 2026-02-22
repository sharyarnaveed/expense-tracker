import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing Supabase env: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set"
  );
}

/**
 * Server-only Supabase client with service role.
 * Use this in Server Actions and API routes to insert/update data (e.g. contactus).
 */
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
