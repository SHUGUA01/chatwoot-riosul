import { createFileRoute } from "@tanstack/react-router";
import stadium from "@/assets/stadium.jpg";
import { ChatwootWidget } from "@/components/ChatwootWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GolPro — Fútbol en vivo con coach IA" },
      { name: "description", content: "Resultados, fixtures y un coach de fútbol con IA listo para responder tus dudas tácticas en tiempo real." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-neon)] text-primary-foreground font-black">G</span>
            <span className="text-lg font-black tracking-tight">GolPro</span>
          </div>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#partidos" className="hover:text-primary transition-colors">Partidos</a>
            <a href="#tabla" className="hover:text-primary transition-colors">Tabla</a>
            <a href="#coach" className="hover:text-primary transition-colors">Coach IA</a>
          </nav>
          <a href="#coach" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-neon)] hover:opacity-90">
            Probar IA
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={stadium} alt="Estadio nocturno" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> En vivo
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            El fútbol que amas, <span className="bg-[image:var(--gradient-neon)] bg-clip-text text-transparent">potenciado con IA</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Sigue partidos, estadísticas y conversa con nuestro coach de inteligencia artificial para resolver cualquier duda táctica al instante.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#coach" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-neon)] hover:opacity-90">
              Hablar con el Coach IA
            </a>
            <a href="#partidos" className="rounded-full border border-border bg-card/60 px-6 py-3 font-semibold text-foreground backdrop-blur hover:border-primary/60">
              Ver partidos
            </a>
          </div>
        </div>
      </section>

      {/* Partidos */}
      <section id="partidos" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Jornada 14</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Partidos destacados</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { home: "River", away: "Boca", score: "2 - 1", state: "FT" },
            { home: "Real Madrid", away: "Barcelona", score: "1 - 1", state: "78'", live: true },
            { home: "Man City", away: "Liverpool", score: "20:30", state: "Hoy" },
          ].map((m) => (
            <article key={m.home} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60 hover:shadow-[var(--shadow-neon)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span>LaLiga</span>
                <span className={m.live ? "rounded-full bg-primary/15 px-2 py-0.5 font-bold text-primary" : ""}>{m.state}</span>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold">{m.home}</span>
                <span className="text-3xl font-black tracking-tight text-primary">{m.score}</span>
                <span className="text-lg font-bold">{m.away}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tabla */}
      <section id="tabla" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-black md:text-4xl">Tabla de posiciones</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Equipo</th>
                  <th className="px-4 py-3 text-right">PJ</th>
                  <th className="px-4 py-3 text-right">DG</th>
                  <th className="px-4 py-3 text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Real Madrid", 14, 22, 36],
                  ["2", "Barcelona", 14, 18, 33],
                  ["3", "Atlético", 14, 12, 29],
                  ["4", "Athletic", 14, 8, 25],
                ].map((r) => (
                  <tr key={r[1] as string} className="border-t border-border/60 hover:bg-secondary/40">
                    <td className="px-4 py-3 font-bold text-primary">{r[0]}</td>
                    <td className="px-4 py-3 font-semibold">{r[1]}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{r[2]}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{r[3]}</td>
                    <td className="px-4 py-3 text-right font-black">{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coach IA */}
      <section id="coach" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Coach IA
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-black md:text-5xl">
          Conversa con el agente. Pulsa la burbuja en la esquina inferior.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          El widget de Chatwoot está integrado en la página. Configura tu Website Token cuando lo tengas y empieza a probar tu agente de IA en segundos.
        </p>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GolPro · Hecho para probar tu agente de IA
      </footer>

      <ChatwootWidget />
    </div>
  );
}
