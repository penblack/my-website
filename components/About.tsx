"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
  Throughout my journey from scripting exploits to engineering secure systems,
  I've been guided by a simple belief:{" "}
  <span className="text-white">
    cybersecurity should be clever, transparent, and empowering.
  </span>{" "}
  I design tools that turn attack data into insights and help defenders respond faster, smarter, and more human-aware.
</p>

<p className="text-start text-muted-foreground lg:px-6">
  I'm currently building <span className="font-semibold text-white">RedShrew</span>, a modular suite of open-source tools for deception, behavioral telemetry, and threat response. Its first utility, <span className="font-semibold text-white">PhantomKey</span>, plants fake credentials to reveal adversary behavior in real time. Upcoming tools include honeypots, trap-based telemetry, and lightweight alerting; each turning attacker curiosity into intel.
</p>

<p className="text-start text-muted-foreground lg:px-6">
  I aim to make cybersecurity feel less like a black box and more like a clear, modular toolkit. Whether I’m deploying traps, scripting decoys, or building threat-facing interfaces, I believe security should meet real-world threats with creativity, clarity, and intent.
</p>

      </div>
    </section>
  );
}
