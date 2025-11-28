import { IoCodeSlashSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  const { name, image, liveLink, description, gitLink } = project;

  return (
    <div className="relative group bg-card-bg rounded-xl overflow-hidden border border-white/5 hover:border-accent-teal/50 transition-all duration-300 h-[400px]">
      <figure className="w-full h-full">
        <img
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/90 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">{description}</p>
        
        <div className="flex gap-4">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-accent-teal text-dark-bg font-bold py-2 px-4 rounded hover:bg-white transition-colors duration-300">
                Live <TbWorldWww className="text-lg" />
              </button>
            </a>
          )}
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className={liveLink ? "flex-1" : "w-full"}>
            <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-dark-bg transition-colors duration-300">
              Code <IoCodeSlashSharp className="text-lg" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;