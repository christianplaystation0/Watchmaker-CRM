import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const supabaseUrl = "https://cagajzhridvohsrviwaw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZ2FqemhyaWR2b2hzcnZpd2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyODQ0ODYsImV4cCI6MjA3OTg2MDQ4Nn0.CSZvT7tPgoEyXwUW_wLOzZUfSUPLAZMpbXvvLOn5cNo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

