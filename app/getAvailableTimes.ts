// app/getAvailableTimes.ts
import { supabaseServer } from "./database";

export async function getAvailableTimes(selectedDate: string) {
  // ensure format YYYY-MM-DD
  const dateStr = String(selectedDate).slice(0, 10);

  const { data, error } = await supabaseServer.from("sisanje").select("*");

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  return data;
}
