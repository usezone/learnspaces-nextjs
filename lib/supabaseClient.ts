import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../config/index";

const supabase = createClient(
  "https://xizqnumreucxbgaqvloq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpenFudW1yZXVjeGJnYXF2bG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MDUzNTQsImV4cCI6MTk5NjM4MTM1NH0.whp06gOm7u819spjpAP_ASBIDrdXaBdQzapj5C5J_ms"
);

export default supabase;
