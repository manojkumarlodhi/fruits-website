import React, { useEffect, useState } from 'react';
import pinaple from "../assets/image/pinaple.png";
import { Link } from 'react-router-dom';

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmpassword] = useState("");
  const [data, updatedata] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((rez) => updatedata(rez))
      .catch((err) => alert("Error fetching users"));
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem("key", JSON.stringify(data));
    }
  }, [data]);

  const adduserdata = (e) => {
    e.preventDefault();
    const user_data = { name, email, password };

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const emailExists = data && data.some((res) => res.email === user_data.email);
    if (emailExists) {
      alert("Email already exit");
      return;
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user_data)
    })
      .then((rez) => alert("User registered successfully"))
      .catch((err) => alert("Could not register user"));
  };

  return (
    <div className="flex justify-center items-center h-screen min-h-full bg-gradient-to-r from-blue-400 to-green-400">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <div className="p-4 flex flex-col items-center bg-orange-500 rounded-l-lg relative">
          <h2 className="text-2xl text-white font-bold mb-2 transform transition-transform duration-300 hover:scale-105">
            Welcome to the Tropical Paradise!
          </h2>
          <div className="bg-aqua p-4 rounded-full mb-4 bg-aqua-200 shadow-lg">
            <img src={pinaple} alt="Pineapple" className="w-64 h-80 transform transition-transform duration-500 hover:scale-110" />
          </div>
          <p className="text-sm text-white text-center transform transition-transform duration-300 hover:scale-105">
            Your gateway to fresh and juicy delights.
          </p>
        </div>

        <div className="form p-8 w-[400px] h-[600px] flex flex-col justify-between bg-orange-500 rounded-r-lg">
          <form className="flex flex-col h-full" onSubmit={adduserdata}>
            <h1 className="text-3xl font-bold mb-4 text-white text-center">Sign Up Here</h1>

            <label htmlFor="name" className="block mb-2 text-white">Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              id="name"
              placeholder="Enter your name"
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200"
            />

            <label htmlFor="email" className="block mb-2 text-white">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              id="email"
              placeholder="Enter your email"
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200"
            />

            <label htmlFor="password" className="block mb-2 text-white">Password</label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200"
            />

            <label htmlFor="confirmPassword" className="block mb-2 text-white">Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setconfirmpassword(e.target.value)}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-white p-2 mb-4 w-full rounded-md hover:bg-yellow-500 transition duration-200 transform hover:scale-105 shadow-md"
            >
              Sign Up
            </button>
          </form>
          <Link to="/login" className="text-yellow-300 hover:underline mb-4 block text-center">Already a Member? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
