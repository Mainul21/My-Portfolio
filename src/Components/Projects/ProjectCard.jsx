import { IoCodeSlashSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const { name, image, liveLink, description, gitLink } = project;
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-2xl overflow-hidden border border-white/5 hover:border-accent-indigo/30 transition-all duration-500 h-[420px]"
      style={{ transformStyle: 'preserve-3d', background: 'rgba(30, 41, 59, 0.5)' }}
    >
      <figure className="w-full h-full">
        <img
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </figure>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-transparent/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px] md:backdrop-blur-0 md:group-hover:backdrop-blur-[2px]">
        {/* Tag */}
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
            Project
          </span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">{name}</h2>
        <p className="text-text-secondary text-sm mb-6 line-clamp-3 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-75">{description}</p>

        <div className="flex gap-3 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-150">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-indigo to-accent-teal text-white font-semibold py-2.5 px-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02]">
                Live <TbWorldWww className="text-lg" />
              </button>
            </a>
          )}
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className={liveLink ? "flex-1" : "w-full"}>
            <button className="w-full flex items-center justify-center gap-2 glass-card text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              Code <IoCodeSlashSharp className="text-lg" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;