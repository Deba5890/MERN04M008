import React from "react";
import AboutImg from "../../assets/myimage.jpeg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - IMAGE */}
     <div className="flex justify-center">
  <img
    className="w-48 md:w-64 lg:w-72 h-auto object-cover rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition duration-300"
    src={AboutImg}
    alt="about"
  />
</div>

        {/* RIGHT - CONTENT */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-lg">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 mb-6">
            I am a Computer Science Engineering student passionate about building modern web applications and working with data. I enjoy turning ideas into real-world projects using clean and efficient code.
          </p>

          {/* SKILLS BLOCK */}
          <div className="space-y-5">

            {/* Frontend */}
            <div className="flex gap-4 group">
              <IoArrowForward
                size={22}
                className="mt-1 text-blue-400 group-hover:translate-x-1 transition"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Frontend Developer
                </h3>
                <p className="text-gray-400 text-sm">
                  Building responsive, modern UI using React, Tailwind CSS, and JavaScript.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="flex gap-4 group">
              <IoArrowForward
                size={22}
                className="mt-1 text-green-400 group-hover:translate-x-1 transition"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Backend Developer
                </h3>
                <p className="text-gray-400 text-sm">
                  Working with APIs, databases, and server-side logic to build scalable systems.
                </p>
              </div>
            </div>

            {/* Python */}
            <div className="flex gap-4 group">
              <IoArrowForward
                size={22}
                className="mt-1 text-yellow-400 group-hover:translate-x-1 transition"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  Python Developer
                </h3>
                <p className="text-gray-400 text-sm">
                  Using Python for automation, data analysis, and problem-solving.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;