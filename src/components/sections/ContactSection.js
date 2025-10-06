"use client";
import { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function ContactSection() {
  // State to manage the form submission result
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d7a162f6-eec5-41c3-8d46-c628d5e5fa8a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset(); 
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
    }

    // Hiding the result message after 5 seconds
    setTimeout(() => {
      setResult(null);
    }, 5000);
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Contact Info & Socials */}
        <div className="md:w-1/3 text-left">
          <p className="text-gray-300 mb-6">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out. I&apos;ll do my best to get back to you!
          </p>
          {/* ... introductory paragraph ... */}
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/ravi-boddapati/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <SiLinkedin size={32} />
            </a>
            <a 
              href="https://www.github.com/BladyBoy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <SiGithub size={32} />
            </a>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea name="message" id="message" rows="5" required className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
              type="submit"
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
              Send Message
            </button>
              {/* Display the submission result message */}
              {result && <span className="text-gray-400">{result}</span>}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}