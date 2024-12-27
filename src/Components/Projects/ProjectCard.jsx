
import { useRef } from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  

  

  const { name, image, liveLink, description, gitLink } = project;
  return (
    <div
      
      className="card bg-base-100 image-full lg:w-9/12 mx-auto shadow-xl hover:shadow-emerald-500"
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body opacity-0 hover:opacity-100 transition-opacity duration-300 ">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          {liveLink ? (
            <a href={liveLink}>
              <button className="btn bg-amber-500 text-black hover:bg-transparent hover:text-white">
                Live
                <TbWorldWww />
              </button>
            </a>
          ) : (
            <></>
          )}
          <a href={gitLink}>
            <button className="btn bg-amber-500 text-black hover:bg-transparent hover:text-white">
              Code
              <IoCodeSlashSharp />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
