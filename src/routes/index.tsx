import { createFileRoute } from "@tanstack/react-router";
import { ChatwootWidget } from "@/components/ChatwootWidget";
import heroImg from "@/assets/rio-sul-building.jpg";

declare global {
  interface Window {
    $chatwoot?: { toggle: (state?: "open" | "close") => void };
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inmobiliaria Rio Sul" },
      { name: "description", content: "Inmobiliaria Rio Sul — espacios futuristas con asistente IA disponible 24/7." },
    ],
  }),
  component: Index,
});

const FAQS = [
  "¿Cuánto es el mantenimiento?",
  "¿Qué incluye mi pago?",
  "¿Cuánto es la luz / agua / administración / limpieza?",
  "¿Qué hora es en X ciudad?",
];

function openChat(prefill?: string) {
  if (typeof window === "undefined") return;
  window.$chatwoot?.toggle("open");
  if (prefill) {
    setTimeout(() => {
      const input = document.querySelector<HTMLTextAreaElement>(
        ".woot-widget-holder textarea, textarea.user-message-input",
      );
      if (input) {
        input.value = prefill;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      }
    }, 600);
  }
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
            Rio Sul
          </span>
          <button
            type="button"
            onClick={() => openChat()}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
          >
            Chatear
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Edificio futurista Inmobiliaria Rio Sul"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center md:py-48">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Inmobiliaria
          </p>
          <h1 className="mt-6 text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
            Rio <span className="font-serif italic text-primary">Sul</span>
          </h1>
        </div>
      </section>

      {/* FAQ — preguntas al asistente IA */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Asistente IA
          </p>
          <h2 className="mt-3 text-3xl font-light md:text-4xl">
            Pregúntale lo que necesites
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toca una pregunta y el chat se abrirá lista para enviarla. También puedes escribir la tuya.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {FAQS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => openChat(q)}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-left transition hover:border-primary/60 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="text-base font-medium">{q}</span>
              <span aria-hidden className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Inmobiliaria Rio Sul
      </footer>

      <ChatwootWidget />
    </div>
  );
}
