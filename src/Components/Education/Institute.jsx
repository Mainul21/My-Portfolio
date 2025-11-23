const Institute = ({ institute, isHovered }) => {
  const { name, image, degree, Year, Result, location } = institute;

  return (
    <div className="relative w-full h-full group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-dark-bg/80 transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-end z-10">
        <div className={`transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-100'}`}>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{name}</h3>
          <p className="text-accent-teal font-medium mb-4">{location}</p>
          
          <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-300 text-sm">{degree}</p>
            <div className="flex justify-between text-sm font-mono text-gray-400 border-t border-white/10 pt-2 mt-2">
              <span>{Year}</span>
              <span className="text-accent-teal">{Result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;