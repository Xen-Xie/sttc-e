import React, { useState } from "react";
import Btn from "../../../components/common/UI/Btn";
import { Link } from "react-router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // Email Validation
  const validateEmail = (value) => {
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!regex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Password Validation
  const validatePassword = (value) => {
    setPassword(value);

    if (value.trim() === "") {
      setPassError("Password is required");
    } else if (value.length < 6) {
      setPassError("Password must be at least 6 characters");
    } else {
      setPassError("");
    }
  };

  // Form Submit Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }

    if (!password) {
      setPassError("Password is required");
      valid = false;
    }

    if (!valid) return;

    window.location.href = "/";
  };

  return (
    <div className="bg-container max-w-md mx-2 xs:mx-3 md:mx-auto mt-10 p-6 rounded-2xl shadow-lg font-urbanist">
      <h1 className="text-center text-2xl font-inter">Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mt-6">
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="Email" className="text-lg mx-1">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter Your Email"
              id="Email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              className={`border px-3 py-1.5 rounded-3xl outline-none transition 
              ${
                emailError
                  ? "border-warning/60 bg-warning/20"
                  : "border-secondary"
              }`}
            />

            {emailError && (
              <p className="text-warning text-sm mx-1">{emailError}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-lg mx-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                id="password"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className={`border px-3 py-1.5 rounded-3xl outline-none w-full pr-10 transition
                ${
                  passError
                    ? "border-warning/60 bg-warning/20"
                    : "border-accent"
                }`}
              />
              <i
                className={`fa-solid text-primary ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } 
                absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            {passError && (
              <p className="text-warning text-sm mx-1">{passError}</p>
            )}
          </div>

          <Btn variant="primary" type="submit" className="w-full mt-4">
            <Link to={"/"}>Sign In</Link>
          </Btn>

          <Link
            to={"/reset-password"}
            className="text-blue-500 hover:underline text-center"
          >
            Reset Password
          </Link>
        </div>

        <div className="text-center mt-4">
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
