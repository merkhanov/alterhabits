import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardContent } from "@/components/DashboardContent";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("http://localhost:3000");
  }

  const { data: botData } = await supabase
    .from("bot_tokens")
    .select("bot_name, bot_username")
    .eq("user_id", user.id)
    .single();

  return (
    <DashboardContent
      email={user.email ?? ""}
      initialBot={botData}
    />
  );
}
