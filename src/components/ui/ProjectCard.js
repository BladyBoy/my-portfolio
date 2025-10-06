import Link from 'next/link';
import TechTag from './TechTag';

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col h-full 
                   transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:border-blue-500">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </Link>
        {liveUrl && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}