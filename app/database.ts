// app/lib/supabase-server.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// safety check during dev
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "Missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY) to .env.local"
  );
}

// stable server-side client (ok to create at module level)
export const supabaseServer = createClient(SUPABASE_URL, SUPABASE_KEY, {
  global: {
    // optionally override fetch for debugging; omit in production
    // fetch: (...args) => fetch(...args)
  },
});
