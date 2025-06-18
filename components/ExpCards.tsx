"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jun 2024 — Present",
    currentPosition: "Founder & Developer",
    place: "PhantomKey",
    previousPositions: [""],
    description:
      "Building PhantomKey, a lightweight deception tool for cybersecurity that plants fake credentials and secrets across systems to detect adversarial activity. Focused on blending behavioral detection with practical security automation to empower defenders.",
    skills: [
      "Cybersecurity",
      "Deception Technology",
      "Python",
      "Bash",
      "Linux",
      "Tor Networking",
      "SIEM Integration",
      "Open Source",
      "Threat Intelligence",
    ],
  },
  {
    timeline: "Jun 2024 — Sep 2024",
    currentPosition: "Fraud Detection & Investigation Analyst Lead",
    place: "PNC Bank",
    previousPositions: [""],
    description:
      "Analyzed cases generated from enterprise fraud detection systems, researched and reported suspicious activities, and maintained proper documentation. Collaborated with internal and external stakeholders to coordinate investigative efforts.",
    skills: [
      "Fraud Analysis",
      "Stakeholder Communication",
      "Enterprise Monitoring",
      "Data Analysis",
      "Financial Compliance",
    ],
  },
  {
    timeline: "Jan 2024 — Apr 2024",
    currentPosition: "Data Analyst",
    place: "Think Data Solutions LLC.",
    previousPositions: [""],
    description:
      "Streamlined contact collection processes, led team retrospectives and weekly executive summaries, and developed high-level communication and client-facing skills.",
    skills: [
      "Data Analysis",
      "Communication",
      "Client Engagement",
      "Process Improvement",
      "Team Collaboration",
    ],
  },
  {
    timeline: "2024 — Present",
    currentPosition: "SOC Analyst (Home Lab Experience)",
    place: "Independent / Personal Lab",
    previousPositions: [""],
    description:
      "Designed and maintained a personal SOC home lab. Simulated brute force attacks with Hydra, analyzed traffic with Wireshark, deployed Sysmon and forwarded logs to SIEM, and conducted red/blue team exercises using Kali Linux.",
    skills: [
      "SIEM",
      "Hydra",
      "Wireshark",
      "Sysmon",
      "Log Aggregation",
      "IDS/IPS",
      "Kali Linux",
      "Endpoint Detection",
      "Windows/Linux Forensics",
    ],
  }
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:Haydenvictor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
