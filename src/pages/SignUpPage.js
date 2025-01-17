import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import RegisterImg from "../assets/login.avif";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("proctor");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, role);

    try {
      const { data } = await axios.post("http://localhost:4000/api/register", {
        name,
        email,
        password,
        role,
      });

      if (data) {
        navigate("/");
        localStorage.setItem("token", data.token);
        alert("User created successfully");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Removed circles */}
      <div className="grid shadow-lg shadow-blue-500/50 mx-auto max-w-4xl md:grid-cols-2">
        <div className="bg-blue-600">
          <div className="h-full w-full mt-14 text-center overflow-hidden">
            <div>
              <h1 className="text-gray-100 text-4xl font-bold">Welcome to our website</h1>
              <p className="text-gray-100 text-lg mt-4 text-center mt-5">Register now to get access to all the cool and great features.</p>
            </div>
            {/* Conditionally render the image only on larger screens */}
            <div className="hidden md:block -mt-14">
              <img src={RegisterImg} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="bg-white">
          {/* ... (previous form and other content) */}
          <div className="w-full overflow-hidden p-6">
            <div className="flex flex-col md:flex-row items-center gap-5 md:pr-10 w-full text-center md:justify-end">
              <span className="text-sm text-gray-500">Don't have an account?</span>
              <NavLink className="text-sm bg-blue-600 text-white px-4 rounded-sm py-2" to={"/login"}>
                Login
              </NavLink>
            </div>
            <div className="mb-4">
              <h1 className="text-4xl font-bold mt-3 text-gray-700">Create your account</h1>
            </div>
            <div className="text-gray-700">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block mb-2 mt-5">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
                  type="text"
                  id="name"
                  placeholder="Your name"
                />
                <label htmlFor="email" className="block mb-2 mt-5">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
                  type="text"
                  id="email"
                  placeholder="Example@email.com"
                />
                <label htmlFor="password" className="block mb-2 mt-5">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
                  type="text"
                  id="password"
                  placeholder="Enter password"
                />
                <div className="mt-5">
                  <label htmlFor="role">Role -</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(event) => {
                      setRole(event.target.value);
                    }}
                    className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
                  >
                    <option value="optiona">Faculty</option>
                    <option value="optionb">Student</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="block bg-blue-600 font-semibold py-3 rounded mt-5 text-sm text-white w-full"
                >
                  Create your account
                </button>
              </form>
            </div>
            <div className="text-sm mt-4 text-gray-700 mb-4">
              Already have an account?{" "}
              <NavLink to={"/login"} className="text-blue-600">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;