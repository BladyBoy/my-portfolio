"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // ing listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Removing listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled ? 'translate-y-0 bg-gray-900 shadow-lg' : '-translate-y-full'}
    `}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-xl font-bold text-white">
            <Link href="/#home">
              Ravi Boddapati
            </Link>
          </div>

          {/* Desktop Menu Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/#projects" className="text-gray-300 hover:text-blue-500">Projects</Link>
            <Link href="#services" className="text-gray-300 hover:text-blue-500">Services</Link>
            <Link href="/#about" className="text-gray-300 hover:text-blue-500">About</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (this part shows or hides based on the 'isOpen' state) */}
        {isOpen && (
          <div className="md:hidden mt-3">
            <Link href="/#projects" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">Projects</Link>
            <Link href="#services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">Services</Link>
            <Link href="/#about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">About</Link>
            <Link href="/#contact" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}