"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='home' className="min-h-screen flex items-center bg-gray-900 py-20 relative overflow-hidden">
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          
          <div className="md:w-1/2 flex flex-col items-center md:items-start z-10">
            <h1 className={`text-4xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Hi, I&apos;m Ravi Boddapati
            </h1>
            <h3 className={`text-3xl font-bold text-[#00abf0] mb-4 transition-all duration-700 ease-out delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Full Stack Web Developer
            </h3>

            <p className={`mt-2 text-lg md:text-xl text-gray-300 max-w-xl transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              A Full-Stack Developer specializing in building robust and scalable backend systems with Node.js and the MERN stack.
            </p>
            <div className={`mt-8 flex justify-center md:justify-start gap-4 transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Button 1: View My Work */}
              <Link 
                href="/#projects" 
                className="
                  /* Base Styles */
                  relative inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold tracking-wider z-10 overflow-hidden transition-all duration-500
                  bg-[#00abf0] border-2 border-[#00abf0] text-[#081b29]
                  
                  /* ::before Pseudo-element for the overlay */
                  before:content-[''] before:absolute before:top-0 before:left-0
                  before:w-0 before:h-full before:bg-[#081b29] 
                  before:z-[-1] before:transition-all before:duration-500
                  
                  /* Hover States */
                  hover:text-[#00abf0] hover:before:w-full
                "
              >
                View My Work
              </Link>

              {/* Button 2: Get In Touch */}
              <Link 
                href="/#contact" 
                className="
                  /* Base Styles */
                  relative inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold tracking-wider z-10 overflow-hidden transition-all duration-500
                  bg-transparent border-2 border-[#00abf0] text-[#00abf0]

                  /* ::before Pseudo-element for the overlay */
                  before:content-[''] before:absolute before:top-0 before:left-0
                  before:w-0 before:h-full before:bg-[#00abf0]
                  before:z-[-1] before:transition-all before:duration-500

                  /* Hover States */
                  hover:text-[#081b29] hover:before:w-full
                "
              >
                Get In Touch
              </Link>

            </div>
          </div>

          <div className={`relative w-80 h-80 md:w-115 md:h-115 rounded-full overflow-hidden border-4 border-blue-500 shadow-neon-blue mt-12 md:mt-0 md:ml-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
            <Image
              src="/ravi-profile.jpg"
              alt="Ravi Boddapati Profile"
              fill
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}