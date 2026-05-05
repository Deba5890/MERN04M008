import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="Contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-20"
    >
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6 border border-white/20">

            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>

            <div className="flex items-center gap-4 group">
              <FaEnvelope className="text-blue-400 text-xl group-hover:scale-110 transition" />
              <a
                href="mailto:debasmitasenapati00@gmail.com"
                className="hover:text-blue-400 transition"
              >
                debasmitasenapati00@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <FaPhone className="text-green-400 text-xl group-hover:scale-110 transition" />
              <span className="hover:text-green-400 transition">
                +91 6372481343
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <FaLinkedin className="text-blue-500 text-xl group-hover:scale-110 transition" />
              <a
                href="https://www.linkedin.com/in/debasmita-senapati-35387b275"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <FaGithub className="text-xl group-hover:scale-110 transition" />
              <a
                href="https://github.com/Deba5890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            action="mailto:debasmitasenapati00@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-5 border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-2">Send Message</h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-transparent border border-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Send Message 
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;