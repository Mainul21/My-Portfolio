import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.from(projectsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });
  });

  const projects = [
    {
      name: "Book Review",
      description:
        "A MERN stack website for sharing book reviews. Frontend completed, backend in progress.",
      image: "https://i.ibb.co.com/rQ08znz/Screenshot-2024-12-10-191356.png",
      liveLink: "https://pricey-war.surge.sh/",
      gitLink: "https://github.com/Mainul21/Book-review",
    },
    {
      name: "King's Estate",
      description:
        "A MERN stack website for property dealings. Frontend completed, backend in progress.",
      image: "https://i.ibb.co.com/qBkNctx/Screenshot-2024-12-10-202728.png",
      liveLink: "https://kings-estate.web.app/",
      gitLink: "https://github.com/Mainul21/Kings-Estate",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/Z6T6YzB/Screenshot-2024-12-10-204403.png",
      gitLink: "https://github.com/Mainul21/Snake-Game",
    },
    {
      name: "Diamond Catcher",
      description: "Classic Diamond Catcher game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/SNjVHmz/Screenshot-2024-12-10-204831.png",
      gitLink: "https://github.com/Mainul21/Diamond-Catcher",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-12">
          Projects & <span className="text-amber-400">Work</span>
        </h1>
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;