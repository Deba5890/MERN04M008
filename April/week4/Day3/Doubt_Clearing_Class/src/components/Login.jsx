import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-200 to-blue-300">
      <div className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 w-[360px]">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-white p-3 rounded-xl shadow">
            ➜
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Sign in with email
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        {/* Email */}
        <div className="flex items-center bg-white/60 rounded-lg px-3 py-2 mb-4 shadow-sm">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Password */}
        <div className="flex items-center bg-white/60 rounded-lg px-3 py-2 shadow-sm">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent outline-none w-full text-sm"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Forgot */}
        <div className="text-right text-xs text-gray-500 mt-2 mb-4 cursor-pointer">
          Forgot password?
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-2 rounded-lg shadow-md hover:opacity-90">
          Get Started
        </button>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm my-4">
          or sign in with
        </div>

        {/* Social */}
        <div className="flex gap-3">
          <button className="flex-1 flex justify-center items-center bg-white rounded-lg py-2 shadow">
            <FaGoogle />
          </button>
          <button className="flex-1 flex justify-center items-center bg-white rounded-lg py-2 shadow">
            <FaFacebookF />
          </button>
          <button className="flex-1 flex justify-center items-center bg-white rounded-lg py-2 shadow">
            <FaApple />
          </button>
        </div>
      </div>
    </div>
  );
}