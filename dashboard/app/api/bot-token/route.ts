import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

interface TelegramGetMeResponse {
  ok: boolean;
  result?: {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
  };
  description?: string;
}

export const GET = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("bot_tokens")
    .select("bot_name, bot_username")
    .eq("user_id", user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ bot: null });
  }

  return NextResponse.json({ bot: data });
};

export const POST = async (request: Request) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const token = body.token as string;

  if (!token || !token.includes(":")) {
    return NextResponse.json(
      { error: "Invalid token format. It should look like 123456:ABC-DEF..." },
      { status: 400 }
    );
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/getMe`
  );
  const telegramData: TelegramGetMeResponse = await telegramResponse.json();

  if (!telegramData.ok || !telegramData.result) {
    return NextResponse.json(
      {
        error:
          telegramData.description ??
          "Invalid bot token. Please check and try again.",
      },
      { status: 400 }
    );
  }

  const botInfo = telegramData.result;

  const { error } = await supabase.from("bot_tokens").upsert(
    {
      user_id: user.id,
      token,
      bot_name: botInfo.first_name,
      bot_username: botInfo.username,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );

  if (error) {
    return NextResponse.json(
      { error: "Failed to save bot token." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    bot: {
      bot_name: botInfo.first_name,
      bot_username: botInfo.username,
    },
  });
};

export const DELETE = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { error } = await supabase
    .from("bot_tokens")
    .delete()
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json(
      { error: "Failed to disconnect bot." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
};
