import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yrbhsrlwszcqlpzekzjw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYmhzcmx3c3pjcWxwemVremp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTMwMDksImV4cCI6MjAzODY4OTAwOX0.sGP420JnIzAhbWkVGQ_nZAV38qXLAwJmitwMU9__gUE";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
