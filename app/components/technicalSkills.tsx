import SectionHeader from "@/app/components/sectionHeader";

type SkillCategory = {
  name: string;
  tech: string[];
};

const skills: SkillCategory[] = [
  {
    name: "Languages",
    tech: ["JavaScript/TypeScript", "Java", "C", "PHP", "SQL"],
  },
  {
    name: "Frontend",
    tech: ["React", "Next.js", "AngularJS", "HTML", "CSS", "Tailwind", "Bootstrap", "Figma"],
  },
  {
    name: "Backend",
    tech: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Spring Security",
      "Strapi",
      "OpenAPI",
      "Stripe",
      "Criipto (MitID)",
      "PHPMailer",
      "DIBS",
    ],
  },
  {
    name: "Methodologies",
    tech: [
      "Agile",
      "Scrum",
      "Scrum of Scrums",
      "Kanban",
      "Backcasting",
      "Trunk-Based Development",
      "Git Flow",
      "Conflict resolution",
      "Active listening",
    ],
  },
  {
    name: "Databases & Data Access",
    tech: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Hibernate", "JPA"],
  },
  {
    name: "Testing",
    tech: [
      "Jest",
      "JUnit",
      "Mockito",
      "OUnit2",
      "Integration testing",
      "API testing",
      "Usability testing",
      "LLM-assisted test generation",
    ],
  },
  {
    name: "DevOps and code quality",
    tech: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Gradle",
      "ESLint",
      "Prettier",
      "CodeScene",
      "Copilot code reviews",
    ],
  },
  {
    name: "Mobile",
    tech: ["React Native", "Expo", "Swift"],
  },
  {
    name: "Compilers and low-level programming",
    tech: ["C", "OCaml", "OCamllex", "Menhir", "6502 Assembly"],
  },
  {
    name: "AI and Machine Learning",
    tech: ["Python", "Keras", "PDDL"],
  },
];

export default function TechnicalSkills() {
  return (
    <>
      <div className="py-8 px-4 lg:px-12 min-h-200">
        <SectionHeader
          title="Technical and Collaborative skills"
          text={
            <>
              Beyond technical skills, I bring a collaborative mindset to
              software development. I enjoy learning new technologies, taking
              initiative, and helping teams maintain a clear overview of their
              work.
              <br />
              <br />
              I aim to balance technical depth with practical progress, ensuring
              that solutions are well-considered without losing sight of project
              goals.
            </>
          }
        />
        <div className="skills-scroll flex gap-4 overflow-x-auto scroll-smooth pb-3">
          {skills.map((category) => (
            <div key={category.name} className="border shrink-0 w-3/5 lg:w-1/5">
              <p className="p-2 font-bold text-xl">{category.name}</p>
              <div className="flex flex-wrap gap-1 p-4">
                {category.tech.map((tech) => (
                  <span
                    key={tech}
                    className="p-1 rounded bg-projectYellow text-projectBlack font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
