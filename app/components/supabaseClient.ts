import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lteoavimrmyawwdksvka.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZW9hdmltcm15YXd3ZGtzdmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMjQ0MTMsImV4cCI6MjA3NzcwMDQxM30.vUtL69y0zn8m1GV08pDSzTnlTOSxLYWYU-oVoCyPlFk"; // la que empieza con "eyJ..."
export const supabase = createClient(supabaseUrl, supabaseKey);
