"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/Phantomkey.png",
    title: "PhantomKey - Deception Tool",
    description:
      "A lightweight cybersecurity tool that plants fake credentials and secrets to detect and log adversarial behavior. Used to turn attacker actions into alerts, empowering defenders through behavioral visibility and deception.",
    skills: [
      "Cybersecurity",
      "Python",
      "Linux",
      "SIEM Integration",
      "Tor Networking",
      "Threat Intelligence",
    ],
    link: "https://phantomkey.com",
  },
  {
    imagePath: "/redshrew.png",
    title: "Redshrew - Cybersecurity Startup",
    description:
      "A stealth-stage cybersecurity startup focused on building innovative, human-friendly security tools that blend deception, automation, and behavioral analytics. Currently in early development of research platforms and sensor-based traps.",
    skills: [
      "Startup Development",
      "Security R&D",
      "Tool Design",
      "Threat Detection",
      "Product Strategy",
    ],
    link: "https://redshrew.com",
  },
  {
    imagePath: "/homelab.png",
    title: "Cybersecurity Homelab",
    description:
      "A virtualization-based home lab simulating SOC environments. Includes SIEM, IDS/IPS, endpoint detection, and red vs. blue team simulations using Kali Linux, Hydra, Sysmon, and Wireshark to monitor and respond to simulated threats.",
    skills: [
      "Virtualization",
      "Kali Linux",
      "Hydra",
      "Wireshark",
      "Sysmon",
      "SIEM",
    ],
    link: "https://github.com/penblack/homelab",
  },
  {
     imagePath: "/Inkeeper.png",
    title: "State Innkeeper Sites",
    description:
      "A network of independently branded websites built for regional innkeepers to manage bookings, share local recommendations, and boost their digital presence. Starting with GeorgiaInnkeepers.com and expanding nationally.",
    skills: [
      "Next.js",
      "Booking Systems",
      "SEO",
      "Content Management",
      "Local Business Web Dev",
    ],
    link: "https://gainnkeepers.com",
  },
  {
    imagePath: "/GhostToursUSA.png",
    title: "GhostToursUSA.com",
    description:
      "A growing collection of regional ghost tour listings across the U.S., helping small tour companies connect with curious travelers. Combines history, mystery, and tourism under one unified brand.",
    skills: ["Web Aggregation", "JavaScript", "Directory UX", "SEO"],
    link: "https://GhostToursUSA.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}