import ProjectCard from "./ProjectCard";

const Projects = () => {
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
      name: "Core Banking System",
      description:
        "An academic prototype of a core banking system built using PERN stack, featuring user authentication, account management, and transaction processing, loan management and more.",
      image: "https://i.ibb.co.com/nNT88B51/Screenshot-2025-03-19-115303.png",
      liveLink: "https://core-banking-system-850t.onrender.com",
      gitLink: "https://github.com/Mainul21/Core-Banking-System",
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
    <section className="bg-dark-bg py-20 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-accent-teal font-bold tracking-widest text-sm uppercase">
            <span className="text-lg">✖</span> PROJECTS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Projects & <span className="text-accent-teal">Work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;