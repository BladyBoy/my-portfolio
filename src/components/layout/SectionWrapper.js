export default function SectionWrapper({ id, title, children, titleAlign = 'center' }) {
  const alignmentClass = titleAlign === 'left' ? 'text-left' : 'text-center';

  return (
    <section id={id} className="py-6 scroll-mt-10">
      <div className="container mx-auto px-24">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 container-neon-glow">

          {/* This title will now ONLY appear if a 'title' prop is passed */}
          {title && (
            <h2 className={`text-4xl font-extrabold text-white mb-12 ${alignmentClass}`}>
              {title}
            </h2>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}