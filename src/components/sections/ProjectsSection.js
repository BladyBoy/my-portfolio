import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../layout/SectionWrapper';

const projectsData = [
  {
    title: "Online Fashion Store",
    description: "A robust, full-stack eCommerce platform built with the MERN stack, featuring role-based access for both customers and administrators, JWT authentication, and a high-performance Next.js storefront.",
    techStack: ["Next.js", "React", "Redux", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/BladyBoy/Ecommerce.git", 
    liveUrl: null,   
  },
  {
    title: "Sports Scheduler Web App",
    description: "A full-stack application for managing sports events, featuring distinct roles for administrators and participants. Built with Node.js and PostgreSQL, it includes secure authentication with Passport.js and CSRF protection.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "EJS", "Passport.js"],
    githubUrl: "https://github.com/BladyBoy/Sports-Scheduler-Web-Application",
    liveUrl: null,
  },
  {
    title: "Dynamic Resume Builder",
    description: "A web application allowing users to create, manage, and download professional resumes in PDF format. Features secure authentication, multiple templates, and robust data handling with a PostgreSQL database.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "EJS", "Passport.js"],
    githubUrl: "https://github.com/BladyBoy/Resume-Builder.git",
    liveUrl: null, 
  },
  {
    title: "RESTful Blog API",
    description: "A secure and scalable backend-only REST API for a blog platform. Built with Node.js and MongoDB, it features JWT authentication, full CRUD operations, role-based access control, and a clean, modular architecture.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Jest"],
    githubUrl: "https://github.com/BladyBoy/Blog-App.git",
    liveUrl: null,
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}