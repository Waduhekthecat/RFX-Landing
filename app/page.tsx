import WaitlistForm from "../components/WaitlistForm";
import FaultlineLogo from "../components/FaultlineLogo";
// import rfxlogo from "@/assets/rfx-logo.png";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#070A12] text-white scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 font-semibold tracking-wide">
            <a href="#top" className="inline-flex items-center cursor-pointer">
              <FaultlineLogo className="h-12 w-auto" />
            </a>
          </div>

          <nav className="hidden items-center gap-4 text-sm md:flex">
            <a className="text-white/70 hover:text-white" href="#what">Product</a>
            <a className="text-white/70 hover:text-white" href="#features">Architecture</a>
            <a className="text-white/70 hover:text-white" href="#how">Early Access</a>
            <a className="text-white/70 hover:text-white" href="#how">Investors</a>
            <a
              className="rounded-full bg-linear-to-br from-violet-500 to-cyan-300 px-4 py-2 font-semibold text-[#071018] hover:opacity-90"
              href="#waitlist"
            >
              Request Early Access
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-10 pt-14 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            <img src="/rfx-logo.png" alt="RFX" className="h-10 md:h-10 w-55 mb-[0.3em]" draggable={false} />
          </h1>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-4xl"> Your Sound. Your Rig. Live.</h2>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            A hardware-first performance platform that gives you control over complete signal architectures in real time.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-xl bg-linear-to-br from-violet-500 to-cyan-300 px-10 py-2.5 font-semibold text-[#071018] hover:opacity-90"
            >
              Get Early Access
            </a>
            <div className="relative group flex items-center">
              <a
                className="
                  rounded-full 
                  border border-white/10 
                  bg-white/5 
                  px-5 py-2.5 
                  font-semibold 
                  text-white/40 
                  cursor-not-allowed 
                  opacity-70 
                  pointer-events-none
                "
                aria-disabled="true"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Boot-to-rig reliability", "Hardware-first control", "Bring-your-own plugins"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="rounded-md border border-white/4 bg-white/1 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
          <img
            src="/rfx-hero.png"
            alt="RFX concept render"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </section>

      {/* What */}
      <section id="what" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What is RFX?</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          RFX is a floor processor designed as a bridge between studio quality sound and stage performance.
          It transforms your FX chains into foot-switchable routes in a live performance rig. 
          Build, control, and recall your sound instantly with a simple touchscreen display. 
          Leave the laptop at home.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Built for signal flow</h2>
        <p className="mt-3 text-white/70">Flexible routing, engineered reliability, and customizable hardware controls.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["Real-time routing", "Flexible routes, parallel paths, and dynamic FX chain control."],
            ["Open by design", "Customizable footswitches & knobs that control intent, not just parameters & states."],
            ["Beyond the modeler", "Integrates with your own studio FX."],
            ["Reliable boot flow", "Power on → ready to play."],
            ["Intelligent state workflow", "Save and recall complete performance states."],
            ["Modular architecture", "Built to evolve through innovation - not forced hardware upgrades."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="scroll-mt-12 min-h-full mx-auto max-w-6xl px-6 py-10 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["1", "Load your rig", "Power on with confidence into a complete performance setup"],
            ["2", "Sculpt your sound", "Shape your tone using hardware controls with seemless recall."],
            ["3", "Perform", "Switch states instantly with stage-tested reliability."],
          ].map(([n, title, desc]) => (
            <div key={n} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-bold">
                {n}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Get early access</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Join the waitlist for updates, beta access, and demo availability.
            </p>
          </div>
          <WaitlistForm />
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} FAULTLINE Signal Audio. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white/80" href="#">Contact</a>
            <a className="hover:text-white/80" href="#">Privacy</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
