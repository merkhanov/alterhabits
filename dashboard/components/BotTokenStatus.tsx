"use client";

import { useState } from "react";

interface BotInfo {
  bot_name: string;
  bot_username: string;
}

interface BotTokenStatusProps {
  bot: BotInfo;
  onDisconnected: () => void;
}

export const BotTokenStatus = ({ bot, onDisconnected }: BotTokenStatusProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDisconnect = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/bot-token", { method: "DELETE" });
      if (response.ok) {
        onDisconnected();
      }
    } catch {
      // Silently fail — user can retry
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Telegram Bot
          </h2>
          <p className="mt-1 text-sm text-muted">
            Your bot is connected and ready to use.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Connected
        </span>
      </div>

      <div className="mt-4 rounded-lg bg-background p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Bot name</span>
            <span className="text-sm font-medium text-foreground">
              {bot.bot_name}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Username</span>
            <a
              href={`https://t.me/${bot.bot_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
              aria-label={`Open @${bot.bot_username} in Telegram`}
            >
              @{bot.bot_username}
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleDisconnect}
        disabled={isLoading}
        className="mt-4 rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
        aria-label="Disconnect bot"
      >
        {isLoading ? "Disconnecting..." : "Disconnect Bot"}
      </button>
    </div>
  );
};
