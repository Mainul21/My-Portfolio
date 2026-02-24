const Institute = ({ institute, isHovered }) => {
  const { name, image, degree, Year, Result, location } = institute;

  return (
    <div className="relative w-full h-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 transition-all duration-500 ${isHovered
            ? 'bg-gradient-to-t from-dark-bg via-dark-bg/90 to-dark-bg/40'
            : 'bg-gradient-to-t from-dark-bg/90 via-dark-bg/50 to-transparent'
          }`} />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-end z-10">
        <div className={`transition-all duration-500 transform ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{name}</h3>
          <p className="text-accent-teal font-medium mb-3 text-sm">{location}</p>

          <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0'
            }`}
            style={{ maxHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '160px' : undefined, opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : undefined }}
          >
            <div className="glass-card p-3 rounded-lg">
              <p className="text-text-secondary text-sm mb-2">{degree}</p>
              <div className="flex justify-between text-sm font-mono">
                <span className="text-text-secondary">{Year}</span>
                <span className="gradient-text font-bold">{Result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;