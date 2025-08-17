import { IoCodeSlashSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  const { name, image, liveLink, description, gitLink } = project;

  return (
    <div className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-shadow duration-300">
      <figure className="w-full h-48 md:h-64">
        <img
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-gray-300 text-sm md:text-base mb-4">{description}</p>
        <div className="flex gap-4">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                Live <TbWorldWww className="text-lg" />
              </button>
            </a>
          )}
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              Code <IoCodeSlashSharp className="text-lg" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;