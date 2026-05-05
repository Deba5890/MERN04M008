import React from "react";

const projects = [
  {
    title: "Dominos clone app",
    desc: "Domino’s inspired food ordering app with menu browsing, add-to-cart functionality, and responsive design.",
    tech: "React, JavaScript, Tailwind CSS",
    link: "https://github.com/Deba5890/MERN04M008/tree/main/March/innovation%20week/mini%20project",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio to showcase my skills, projects, and experience.",
    tech: "React, Tailwind CSS",
    link: "https://github.com/Deba5890",
  },
  {
    title: "Netflix Data Dashboard",
    desc: "Data analytics dashboard to visualize Netflix data insights.",
    tech: "Python, Pandas, Visualization",
  },
];

function Projects() {
  return (
    <div id="Projects" className="text-white max-w-6xl mx-auto px-6 md:px-20 py-20">

      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-30 p-6 rounded-xl shadow-lg 
            hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm mb-3">
              {item.desc}
            </p>

            <p className="text-gray-400 text-xs mb-4">
              {item.tech}
            </p>

           {item.link ? (
    <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline text-sm"
    >
        View Project →
    </a>
    ) : (
    <span className="text-gray-500 text-sm">
        Coming Soon
    </span>
    )}
            </div>
            ))}

      </div>

    </div>
  );
}

export default Projects;