"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
         <p className="text-start text-muted-foreground lg:px-6">
  Throughout my journey from scripting exploits to engineering secure systems,
  I've been guided by a simple belief:{" "}
  <span className="text-white">
    cybersecurity should be clever, transparent, and empowering.
  </span>{" "}
  At the intersection of deception, behavioral telemetry, and threat response, I
  design tools that make defense more proactive and human-aware.
</p>
<p className="text-start text-muted-foreground lg:px-6">
  Currently, I'm building open-source security utilities like{" "}
  <span className="font-semibold text-white">PhantomKey</span>, a deception
  framework that plants fake credentials to detect adversarial behavior in the
  wild. I focus on crafting lightweight, high-signal software that transforms
  attacker curiosity into actionable insights—helping defenders anticipate,
  analyze, and respond faster.
</p>
<p className="text-start text-muted-foreground lg:px-6">
  My goal is to make cybersecurity feel less like a black box and more like a
  toolkit—modular, understandable, and adversary-aware. Whether I’m deploying
  traps, scripting decoys, or designing threat-facing UIs, I believe security
  should adapt to real-world threats with clarity, creativity, and intent.
</p>
        </p>
      </div>
    </section>
  );
}
