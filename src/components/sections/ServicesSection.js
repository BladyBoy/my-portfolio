import ServiceCard from '../ui/ServiceCard';

/* --- OLD ICONS AND DATA  ---
import { BsBriefcase } from "react-icons/bs"; 
import { FaFlask } from "react-icons/fa"; 
import { CgWebsite } from "react-icons/cg";         

const oldServicesData = [
  { icon: BsBriefcase, title: "Business Analyst" },
  { icon: FaFlask, title: "Researcher" },
];
*/

import { TbDeviceAnalytics } from "react-icons/tb"; // For Full-Stack Developer
import { FaServer } from "react-icons/fa";          // For Backend Developer 
import { LuBrainCircuit } from "react-icons/lu";     // For ML Engineer
import { TbChartInfographic } from "react-icons/tb"; // For Data Analyst

const servicesData = [
  { icon: TbDeviceAnalytics, title: "Full-Stack Developer" },
  { icon: FaServer, title: "Backend Developer" },
  { icon: TbChartInfographic, title: "Data Analyst" },
  { icon: LuBrainCircuit, title: "ML Engineer" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-24">
        <h2 className="text-4xl font-extrabold text-white text-left mb-12">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} IconComponent={service.icon} title={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}