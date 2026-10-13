"use client";

import * as Icon from "@deemlol/next-icons";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@/app/components/sectionHeader";

type Project = {
  name: string;
  category: string;
  description: string;
  tech: string[];
  gitHubLink: string | null;
  URL: string | null;
  period: string;
  imageURL: string[];
};

const projects: Project[] = [
  {
    name: "Madvognen.dk",
    category: "Professional Experience",
    description:
      "Sole developer for six months on the web shop of a Copenhagen food company. Maintained the existing codebase, handled version upgrades and compatibility fixes, fixed bugs, and developed new features for a live product with real customers.",
    tech: ["AngularJS", "JavaScript", "PHP", "PHPMailer", "MySQL", "Bootstrap"],
    gitHubLink: null,
    URL: "https://madvognen.dk/#/start",
    period: "Oct 2025 - Mar 2026",
    imageURL: ["/Madvognen.png"],
  },
  {
    name: "Educado",
    category: "Academic Project",
    description:
      "A learning platform for Brazilian waste pickers, part of the Erasmus+ Egalitarian initiative. Worked in an 8-team Scrum of Scrums setup to modernise the platform: migrated the backend, moved the codebase to TypeScript, and set up CI/CD.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Strapi",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Jest",
    ],
    gitHubLink: "https://github.com/ErasmusEgalitarian",
    URL: null,
    period: "Autumn 2025",
    imageURL: ["/Educado1.png", "/Educado2.png"],
  },
  {
    name: "Webshop & CMS for VMD",
    category: "Academic Project",
    description:
      "A full-stack web shop for a fruit wine company, built with object-oriented analysis and design. It includes online payments, MitID age verification, cookie handling and a responsive UI. Tested with unit tests, API tests and usability tests.",
    tech: [
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "React",
      "Hibernate",
      "JPA",
      "JUnit",
      "Gradle",
    ],
    gitHubLink: "https://github.com/P3-Group-SW3/P3-VinMedDans",
    URL: null,
    period: "Autumn 2024",
    imageURL: ["/VMD1.png", "/VMD2.png"],
  },
  {
    name: "VG-Geoconsult.dk",
    category: "Hobby Project",
    description:
      "Developed a portfolio and consulting website for an independent geologist working in mineral exploration. Implemented a secure admin area where the owner can add, edit and delete content.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Neon Postgres", "Vercel"],
    gitHubLink: null,
    URL: "https://vg-geoconsult.dk/home",
    period: "Autumn 2026",
    imageURL: ["/VGGeoconsult1.png"],
  },
  {
    name: "Critical Path Heuristic h²",
    category: "Bachelor's Thesis",
    description:
      "A research project in classical AI planning. Implemented h¹ and h² with a priority-queue design and two optimisations for h². Benchmarked against LM-cut on IPC domains using an HPC cluster.",
    tech: ["C", "PDDL", "GMake", "A* search", "Downward Lab", "Slurm"],
    gitHubLink: "https://github.com/P6-2CANE/CPDDL-mirror",
    URL: null,
    period: "Spring 2026",
    imageURL: [],
  },
  {
    name: "Neptune",
    category: "Academic Project",
    description:
      "An intermediate language and compiler for composing music on the Commodore 64's SID 6581 sound chip. Covers the full pipeline from lexer and parser to code generation, emitting 6502 Assembly that runs in an emulator.",
    tech: [
      "OCaml",
      "OCamllex",
      "Menhir",
      "6502 Assembly",
      "DASM",
      "VICE",
      "OUnit2",
    ],
    gitHubLink: "https://github.com/Group-CAFNE/Neptune",
    URL: null,
    period: "Spring 2025",
    imageURL: ["/Neptune1.png"],
  },
  {
    name: "Bookhub",
    category: "Academic Project",
    description:
      "A web marketplace for exchanging used textbooks between students. Users can create accounts, post and browse listings, search and filter, and chat with sellers in real time. The design was based on a survey of current and former students.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Axios",
      "REST",
    ],
    gitHubLink: null,
    URL: null,
    period: "Spring 2024",
    imageURL: ["/BookHub.png"],
  },
];

export default function Projects() {
  const [showImage, setShowImage] = useState<null | string>(null);

  return (
    <>
      <div className="py-8 px-4 lg:px-12 min-h-200">
        <SectionHeader
          title="Experienced graduate"
          text={
            <>
              My experience spans independent development, small project teams,
              and large-scale collaboration with 50+ developers and multiple
              stakeholders.
              <br />
              <br />I enjoy working at the intersection of people and
              technology, balancing usability, stakeholder needs, and practical
              problem-solving with the technical challenges of algorithms, data
              structures, and system design.
            </>
          }
        />
        <div className="skills-scroll flex gap-4 overflow-x-auto scroll-smooth pb-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col border shrink-0 w-9/10 lg:w-2/7 justify-between text-md"
            >
              <div className="p-4">
                <div className="flex flex-row justify-between mb-4 min-h-18">
                  <p className="w-1/2 font-bold text-2xl">{project.name}</p>
                  <div className="text-end w-1/2 opacity-80 text-sm">
                    <p>{project.category}</p>
                    <p>{project.period}</p>
                  </div>
                </div>
                <div className="min-h-40">{project.description}</div>
                <div className="w-fit mx-auto justify-start">
                  {project.gitHubLink !== null ? (
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row gap-1 hover:text-projectYellow transition-colors m-4">
                        <Icon.GitHub />
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                  {project.URL !== null ? (
                    <a
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row gap-1 hover:text-projectYellow transition-colors m-4">
                        <Icon.ExternalLink />
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <div className="flex w-full gap-4 px-4 items-end">
                  {project.imageURL.map((url) => (
                    <div
                      key={url}
                      className="relative h-20 max-w-1/2 min-h-10 flex-1 overflow-hidden cursor-pointer rounded opacity-80"
                      onClick={() => {
                        setShowImage(url);
                      }}
                    >
                      <Image
                        src={url}
                        alt={`Screenshot of ${project.name}`}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap p-4 gap-2 min-h-20 items-end">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="grow text-center p-1 rounded bg-projectYellow font-bold text-projectBlack"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-projectBlack/90 p-4"
          onClick={() => setShowImage(null)}
        >
          <div
            className="relative h-9/10 w-9/10"
            onClick={() => setShowImage(null)}
          >
            <Image
              src={showImage}
              alt="Enlarged screenshot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
