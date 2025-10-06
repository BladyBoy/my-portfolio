import SectionWrapper from '../layout/SectionWrapper';
import { FaDownload } from 'react-icons/fa';

export default function AboutMeSection() {
  return (
    
    <SectionWrapper id="about">
      <div className="text-left">
        <p className="text-sm font-semibold uppercase text-blue-500 mb-2">
          About Me
        </p>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
          Overview.
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl space-y-4">
          Motivated and proactive <strong>Full Stack Web Developer</strong> with a solid foundation in <strong>backend technologies</strong>. Skilled in
          developing secure features like authentication, session handling, and dynamic routing using <strong>RESTful APIs</strong> and <strong>JSON
          Web Tokens</strong>. Actively strengthening frontend capabilities with <strong>Next.js</strong> and exploring modern tools like <strong>PowerBI</strong>. Passionate about writing clean, maintainable code and contributing in collaborative team environments.
        </p>

        {/* --- "Download Resume" Button --- */}
        <div className="mt-8">
          <a
            href="/Ravi-Boddapati-Resume.pdf"
            download
            className="
              /* Base Styles */
              relative inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold z-10 overflow-hidden
              bg-blue-600 text-white transition-all duration-500
              
              /* ::before Pseudo-element for the overlay */
              before:content-[''] before:absolute before:top-0 before:left-0
              before:w-0 before:h-full before:bg-gray-800
              before:z-[-1] before:transition-all before:duration-500

              /* Hover States */
              hover:text-blue-500 hover:before:w-full
            "
          >
            <FaDownload />
            Download My Resume
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
}