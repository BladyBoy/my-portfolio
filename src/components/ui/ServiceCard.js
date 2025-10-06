export default function ServiceCard({ IconComponent, title }) {
  return (
    <div className="bg-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center 
                    h-72 border border-gray-700 hover:border-blue-500 transition-all duration-300
                    transform hover:scale-105 hover:-translate-y-2 cursor-pointer">
      
      <div className="mb-4">
        <IconComponent className="w-16 h-16 text-blue-500" />
      </div>

      <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
    </div>
  );
}