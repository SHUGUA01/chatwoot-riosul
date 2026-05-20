import { useEffect } from "react";

type Props = {
  websiteToken?: string;
  baseUrl?: string;
};

declare global {
  interface Window {
    chatwootSDK?: { run: (opts: { websiteToken: string; baseUrl: string }) => void };
    chatwootSettings?: Record<string, unknown>;
  }
}

export function ChatwootWidget({
  websiteToken = import.meta.env.VITE_CHATWOOT_TOKEN ?? "ZDpseBZXKZ8U7vUfreExQEB1",
  baseUrl = import.meta.env.VITE_CHATWOOT_URL ?? "https://interfaz-grafica-chatwoot.ugq8mb.easypanel.host",
}: Props) {
  useEffect(() => {
    if (!websiteToken) return;
    if (document.getElementById("chatwoot-sdk")) return;

    window.chatwootSettings = {
      position: "right",
      type: "expanded_bubble",
      launcherTitle: "Chatea con nosotros",
    };

    const script = document.createElement("script");
    script.id = "chatwoot-sdk";
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK?.run({ websiteToken, baseUrl });
    };
    document.body.appendChild(script);
  }, [websiteToken, baseUrl]);

  return null;
}