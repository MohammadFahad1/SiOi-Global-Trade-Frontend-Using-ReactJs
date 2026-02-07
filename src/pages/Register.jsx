import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { NavLink } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, loading, errorMsg, setErrorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    setSuccessMsg("");
    delete data.confirmPassword;
    try {
      const res = await registerUser(data);
      if (res) {
        setSuccessMsg(
          "An email has been sent to your registered email address. Please verify your account before logging in.",
        );
        reset();
      }
    } catch (err) {
      setErrorMsg(err);
    }
  };
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-[#155dfc]/20 rounded-full blur-[120px] animate-pulse duration-10000 z-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-120 h-120 bg-purple-600/10 rounded-full blur-[120px] animate-pulse duration-8000 z-1" />

      {/* --- Register Card --- */}
      <div
        className="w-full max-w-140 z-10 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight text-center">
              Create Your <br />
              <span className="text-blue-600">SiOi Account</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm font-medium">
              Join us and start managing your trade
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Row 1: First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 px-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.first_name ? "border-red-500" : ""}`}
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 px-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.last_name ? "border-red-500" : ""}`}
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@sioibd.com"
                className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 px-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.email ? "border-red-500" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            {/* Row 2: Phone & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+880..."
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 px-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.phone_number ? "border-red-500" : ""}`}
                  {...register("phone_number", {
                    required: "Phone number is required",
                    maxLength: { value: 15, message: "Max 15 characters" },
                  })}
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 px-4 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.address ? "border-red-500" : ""}`}
                  {...register("address", { required: "Address is required" })}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 pl-4 pr-12 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.password ? "border-red-500" : ""}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Min 8 characters" },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
                      message: `<ul>
                        <li>At least one uppercase letter</li><li>At least one lowercase letter</li><li>At least one number</li><li>At least one special character</li></ul>`,
                    },
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
              {/* Error Message */}
              {errors.password && (
                <div className="w-full mt-4 text-red-600 text-center text-sm font-medium p-2 rounded bg-red-50 border border-red-200">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: errors.password?.message,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="group">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2 ml-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full bg-white/3 border border-blue/10 rounded-2xl py-3 pl-4 pr-12 text-blue-600 outline-none focus:border-[#155dfc]/50 focus:ring-4 focus:ring-[#155dfc]/10 transition-all ${errors.confirmPassword ? "border-red-500" : ""}`}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
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

              {/* Error Message */}
              {errors.confirmPassword && (
                <p className="w-full mt-4 text-red-600 text-center text-sm font-medium p-2 rounded bg-red-50 border border-red-200">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {errorMsg && (
              <div className="w-full mt-4 text-red-600 text-center text-sm font-medium p-2 rounded bg-red-50 border border-red-200">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <p className="w-full mt-4 text-green-600 text-center text-sm font-medium p-2 rounded bg-green-50 border border-green-200">
                {successMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              className={`w-full bg-[#155dfc] hover:bg-[#0046e0] active:scale-[0.97] text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-300 group mt-6 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
              type="submit"
            >
              {loading ? "Creating Account..." : "Create Account"}
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

          <p className="text-center text-gray-500 text-sm font-medium mt-8">
            Already have an account?
            <NavLink
              to="/login"
              className="text-[#155dfc] font-bold ml-2 hover:underline decoration-2 underline-offset-4"
            >
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
