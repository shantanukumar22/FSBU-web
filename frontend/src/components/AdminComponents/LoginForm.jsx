import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const TransparentLoginForm = () => {
    const navigate = useNavigate();
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!enrollmentNumber || !password) {
      setErrorMessage('Enrollment number and password are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {enrollmentNumber, password});
      localStorage.setItem("token", `Bearer ${response.data.token}`);
    //   console.log(response.data)
        navigate("/club/user-profile");
      setSuccessMessage('Login successful!');
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setSuccessMessage('Login successful!');
      setErrorMessage('');
      console.log('Token:', data.token);
      // You can now store the token and redirect the user
      localStorage.setItem('token', data.token);
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615518538341-4f7f5cfb1220?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="backdrop-blur-lg bg-white/30 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-black text-center text-2xl font-semibold mb-6">Login</h2>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-2" htmlFor="enrollmentNumber">
              Enrollment Number
            </label>
            <div className="flex items-center border-b border-white/40 py-2">
              <input
                id="enrollmentNumber"
                type="text"
                placeholder="Enter your enrollment number"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
                className="w-full bg-transparent text-black placeholder-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-white/40 py-2">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-black placeholder-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-black text-sm">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-800" />
              <span className="ml-2">Remember me</span>
            </label>
            <button type="button" className="text-black text-sm hover:underline">
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-black text-lg py-2 px-4 rounded-full transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-black text-center text-sm mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-purple-200 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default TransparentLoginForm;
