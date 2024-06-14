"use client";
import React, { useState } from "react";
import "./globals.css";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleSubmit = () => {
    console.log("Email Address:", email);
    console.log("password: ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <form
        className="max-w-full mx-auto shadow-lg p-20 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center mb-2"></div>
        <h1 className="flex flex-col items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900 m-4">
          Welcome
        </h1>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Password"
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-7"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
