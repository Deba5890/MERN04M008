import React from "react";
import myimage from "../../assets/myimage.jpeg";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">

        {/* LEFT SIDE */}
        <div className="md:w-1/2">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:brightness-125 transition duration-300">
              Debasmita
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-lg leading-relaxed hover:text-gray-200 transition duration-300">
            A passionate Computer Science Engineering student focused on
            building modern web applications and exploring data analytics.
            Skilled in React, JavaScript, and Tailwind CSS, I love turning
            ideas into real-world projects like{" "}
            <span className="text-blue-400 font-medium hover:underline cursor-pointer">
              PizzaHub
            </span>.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Contact */}
            <a
              href="mailto:debasmitasenapati00@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg 
              hover:scale-110 hover:shadow-2xl hover:from-indigo-600 hover:to-blue-500 transition duration-300"
            >
              Contact Me 🚀
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-6 py-3 rounded-full font-semibold 
              hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition duration-300"
            >
              View Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center">

          <div className="relative group cursor-pointer">

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30 
            group-hover:opacity-60 transition duration-300"></div>

            <img
              src={myimage}
              alt="profile"
              className="relative w-52 md:w-72 rounded-full border-4 border-white/30 shadow-2xl 
              group-hover:scale-110 group-hover:rotate-1 transition duration-300"
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;