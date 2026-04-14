"use client";

import { useState } from "react";

interface BotTokenFormProps {
  onConnected: () => void;
}

export const BotTokenForm = ({ onConnected }: BotTokenFormProps) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/bot-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Failed to connect bot.");
        return;
      }

      setToken("");
      onConnected();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-foreground">
        Connect your Telegram Bot
      </h2>
      <p className="mt-1 text-sm text-muted">
        Paste the token you received from{" "}
        <a
          href="https://t.me/BotFather"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:underline"
          aria-label="Open BotFather in Telegram"
        >
          @BotFather
        </a>{" "}
        to connect your bot.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
          required
          autoComplete="off"
          className="w-full rounded-lg border border-stone-200 bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading || !token.trim()}
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:opacity-50 sm:w-auto sm:self-start"
        >
          {isLoading ? "Connecting..." : "Connect Bot"}
        </button>
      </form>
    </div>
  );
};
