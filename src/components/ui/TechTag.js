export default function TechTag({ name }) {
  return (
    <span className="
      /* Base Styles */
      relative inline-block px-3 py-1 rounded-full text-sm font-medium z-10 overflow-hidden
      bg-gray-700 text-gray-200 transition-all duration-300
      
      /* ::before Pseudo-element for the overlay */
      before:content-[''] before:absolute before:top-0 before:left-0
      before:w-0 before:h-full before:bg-blue-600
      before:z-[-1] before:transition-all before:duration-300

      /* Hover States */
      hover:text-white hover:before:w-full
    ">
      <span className="relative z-10">{name}</span>
    </span>
  );
}