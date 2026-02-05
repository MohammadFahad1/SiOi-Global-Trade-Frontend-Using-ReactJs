import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { user, loginUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await loginUser(data);
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      {/* --- Pure Tailwind Animated Background --- */}
      {/* Blue Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-[#155dfc]/20 rounded-full blur-[120px] animate-pulse duration-10000 z-1" />
      {/* Purple Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-120 h-120 bg-purple-600/10 rounded-full blur-[120px] animate-pulse duration-8000 z-1" />

      {/* --- Login Card --- */}
      <div
        className="w-full max-w-110 z-10 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="50"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-[#155dfc] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(21,93,252,0.4)] mb-6 hover:rotate-12 transition-transform duration-300 group">
              {/* Lock SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Login to Your <br />
              <span className="text-blue-600">SiOi Account</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm font-medium">
              Enter your credentials to access your account
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#155dfc] transition-colors duration-300">
                  {/* Mail SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-4 pl-12 pr-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all duration-300 placeholder:text-gray-600 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] text-[#155dfc] font-bold hover:text-blue-500 transition-colors uppercase tracking-tighter cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#155dfc] transition-colors duration-300">
                  {/* Lock SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-4 pl-12 pr-12 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all duration-300 placeholder:text-gray-600 ${errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""}`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors p-1 cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#155dfc] hover:bg-[#0046e0] active:scale-[0.97] text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-300 group mt-4 cursor-pointer">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>

          {/* Social Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black">
              <span className="bg-[#121212] px-4 text-gray-400">
                Secure Authentication
              </span>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm font-medium">
            Don't have an account?
            <button className="text-[#155dfc] font-bold ml-2 hover:underline decoration-2 underline-offset-4 cursor-pointer">
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
