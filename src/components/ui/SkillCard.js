export default function SkillCard({ IconComponent, name }) {
  return (
    <div className="w-50 bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4
                    transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 cursor-pointer group">
      <IconComponent className="w-12 h-12 text-gray-300 transition-colors group-hover:text-white" />
      <p className="text-white font-semibold text-center">{name}</p>
    </div>
  );
}