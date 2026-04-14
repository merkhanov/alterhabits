"use client";

import { useCallback, useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BotTokenForm } from "@/components/BotTokenForm";
import { BotTokenStatus } from "@/components/BotTokenStatus";

interface BotInfo {
  bot_name: string;
  bot_username: string;
}

interface DashboardContentProps {
  email: string;
  initialBot: BotInfo | null;
}

export const DashboardContent = ({
  email,
  initialBot,
}: DashboardContentProps) => {
  const [bot, setBot] = useState<BotInfo | null>(initialBot);

  const handleConnected = useCallback(async () => {
    const response = await fetch("/api/bot-token");
    const data = await response.json();
    if (data.bot) {
      setBot(data.bot);
    }
  }, []);

  const handleDisconnected = useCallback(() => {
    setBot(null);
  }, []);

  return (
    <>
      <DashboardHeader email={email} />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">
            Manage your Telegram bot connection.
          </p>
        </div>

        {bot ? (
          <BotTokenStatus bot={bot} onDisconnected={handleDisconnected} />
        ) : (
          <BotTokenForm onConnected={handleConnected} />
        )}
      </main>
    </>
  );
};
