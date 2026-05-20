import { createFileRoute } from "@tanstack/react-router";
import { ChatwootWidget } from "@/components/ChatwootWidget";
import heroImg from "@/assets/anime-real-estate.jpg";

declare global {
  interface Window {
    $chatwoot?: { toggle: (state?: "open" | "close") => void };
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakura Estate — Inmobiliaria con asistente IA" },
      { name: "description", content: "Vive en espacios con alma. Resuelve tus dudas sobre mantenimiento, pagos y servicios con nuestro asistente IA." },
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
        ".woot-widget-holder textarea, textarea.user-message-input"
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
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-sakura)] text-base">🌸</span>
            <span className="text-lg font-semibold tracking-tight">Sakura Estate</span>
          </div>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#propiedades" className="hover:text-foreground transition-colors">Propiedades</a>
            <a href="#faq" className="hover:text-foreground transition-colors">Preguntas</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </nav>
          <button
            type="button"
            onClick={() => openChat()}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
          >
            Chatear
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-sky)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
              🌸 Nueva temporada · Primavera
            </span>
            <h1 className="mt-6 text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Tu próximo hogar,<br />
              <span className="font-serif italic text-primary">con alma de anime.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Departamentos minimalistas inspirados en la calma japonesa. Resuelve cualquier duda al instante con nuestro asistente conversacional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openChat()}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
              >
                Hablar con el asistente
              </button>
              <a href="#faq" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary/60">
                Preguntas frecuentes
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[image:var(--gradient-sakura)] blur-2xl opacity-60" />
            <img
              src={heroImg}
              alt="Edificio residencial estilo anime con cerezos en flor"
              width={1600}
              height={1000}
              className="rounded-[1.5rem] border border-border shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Propiedades */}
      <section id="propiedades" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Catálogo</p>
            <h2 className="mt-3 text-3xl font-light md:text-4xl">Espacios disponibles</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">3 propiedades</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Hanami Loft", area: "62 m²", price: "$ 14,500 / mes", tag: "Centro" },
            { name: "Komorebi Suite", area: "85 m²", price: "$ 21,000 / mes", tag: "Roma Norte" },
            { name: "Yūgen Garden", area: "120 m²", price: "$ 32,000 / mes", tag: "Polanco" },
          ].map((p) => (
            <article key={p.name} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
              <div className="aspect-[4/3] rounded-xl bg-[image:var(--gradient-sakura)]" />
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.tag}</span>
                <span>{p.area}</span>
              </div>
              <h3 className="mt-2 text-xl font-medium">{p.name}</h3>
              <p className="mt-1 text-primary font-medium">{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ — preguntas al agente */}
      <section id="faq" className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Asistente IA</p>
            <h2 className="mt-3 text-3xl font-light md:text-4xl">Pregúntale lo que necesites</h2>
            <p className="mt-4 text-muted-foreground">
              Toca una pregunta y el chat se abrirá lista para enviarla. También puedes escribir la tuya.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => openChat(q)}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 text-left transition hover:border-primary/50 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="text-base font-medium">{q}</span>
                <span aria-hidden className="text-primary transition-transform group-hover:translate-x-1">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span aria-hidden className="text-3xl">🌸</span>
        <h2 className="mt-4 text-3xl font-light md:text-4xl">
          ¿Listo para encontrar tu <span className="font-serif italic text-primary">hogar</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Nuestro asistente está disponible 24/7 en la burbuja inferior derecha.
        </p>
        <button
          type="button"
          onClick={() => openChat()}
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90"
        >
          Abrir chat
        </button>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sakura Estate · Minimal living
      </footer>

      <ChatwootWidget />
    </div>
  );
}
