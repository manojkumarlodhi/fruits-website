import React from 'react';
import pinaple from "../assets/image/pinaple.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen min-h-full bg-gradient-to-r from-blue-400 to-green-400"> {/* Gradient background */}
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"> {/* Container for image and form */}
        <div className="p-4 flex flex-col items-center bg-orange-500 rounded-l-lg relative"> {/* Background for the image container */}
          <h2 className="text-2xl text-white font-bold mb-2 transform transition-transform duration-300 hover:scale-105">
            Welcome to the Tropical Paradise!
          </h2>
          <div className="bg-aqua p-4 rounded-full mb-4 bg-aqua-200 shadow-lg"> {/* Padding and round shape for image */}
            <img src={pinaple} alt="Pineapple" className="w-64 h-80 transform transition-transform duration-500 hover:scale-110" />
          </div>
          <p className="text-sm text-white text-center transform transition-transform duration-300 hover:scale-105">
            Your gateway to fresh and juicy delights.
          </p>
        </div>
        <div className="form p-8 w-[400px] h-[500px] flex flex-col justify-between bg-orange-500 rounded-r-lg"> {/* Orange background for the form */}
          <form className="flex flex-col h-full"> {/* Flex column for form elements */}
            <h1 className="text-3xl font-bold mb-4 text-white text-center">Login Here</h1>
            <label htmlFor="email" className="block mb-2 text-white">Email</label>
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200" 
            />
            <label htmlFor="password" className="block mb-2 text-white">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="border border-white mb-4 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 bg-orange-200" 
            />
            <Link to="#" className="text-yellow-300 hover:underline mb-4 block text-center">Forgot Password?</Link>
            <button 
              type="submit" 
              className="bg-yellow-400 text-white p-2 mb-6 w-full rounded-md hover:bg-yellow-500 transition duration-200 transform hover:scale-105 shadow-md"
            >
              Login
            </button>
          </form>
          <Link to="/signup" className="text-yellow-300 hover:underline mb-4 block text-center">Not a Member? Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
