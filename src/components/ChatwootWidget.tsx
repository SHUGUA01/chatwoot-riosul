import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (opts: { websiteToken: string; baseUrl: string }) => void;
    };

    $chatwoot?: {
      toggle: (state?: "open" | "close") => void;
    };
  }
}

export function ChatwootWidget() {
  useEffect(() => {
    const BASE_URL = "https://interfaz-grafica-chatwoot.ugq8mb.easypanel.host";

    // Evita doble carga
    if (document.getElementById("chatwoot-sdk")) return;

    const script = document.createElement("script");

    script.id = "chatwoot-sdk";

    script.src = `${BASE_URL}/packs/js/sdk.js`;

    script.async = true;

    script.defer = true;

    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: "pf6DyNRAxqNYARhfzvNFmimf",
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
