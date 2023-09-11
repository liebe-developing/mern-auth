import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { OAuth } from "../components";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg outline-none focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
          value={username}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg outline-none focus:ring-1 focus:ring-sky-500"
          onChange={handleChange}
          value={email}
        />
        <div className="relative flex w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg outline-none focus:ring-1 focus:ring-sky-500 w-full"
            onChange={handleChange}
            value={password}
          />
          {showPassword ? (
            <AiFillEye
              className="absolute right-4 bottom-3 w-6 h-6 cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute right-4 bottom-3 w-6 h-6 cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          )}
        </div>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "sign up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 hover:text-blue-700 transition ease-in-out duration-150">
            Sign in
          </span>
        </Link>
      </div>

      {error && (
        <p
          className="text-red-600 mt-5 bg-red-200 border-l-4 border-l-red-600
         p-3 rounded"
        >
          Something went wrong
        </p>
      )}
    </div>
  );
};

export default SignIn;
