"use client";
import SectionWrapper from '../layout/SectionWrapper';
import SkillCard from '../ui/SkillCard';
import {
  PythonIcon, JavaIcon, JavascriptIcon, NodejsIcon, ExpressIcon, ReactIcon,
  NextJSIcon, TailwindCSSIcon, MongoDBIcon, MySQLIcon, PostgreSQLIcon, FirebaseIcon,
  JestIcon, SupertestIcon, PostmanIcon, SeleniumIcon
} from '../ui/TechIcons';

// Organize all skills into categories
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: PythonIcon },
      { name: "Java", icon: JavaIcon },
      { name: "JavaScript", icon: JavascriptIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsIcon },
      { name: "Express.js", icon: ExpressIcon },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "Tailwind CSS", icon: TailwindCSSIcon },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "Firebase", icon: FirebaseIcon },
    ],
  },
  {
    title: "Testing & API Tools",
    skills: [
      { name: "Jest", icon: JestIcon },
      { name: "Supertest", icon: SupertestIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "Selenium", icon: SeleniumIcon },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-white text-center mb-4">{category.title}</h3>
            {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"> */}
            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} IconComponent={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}