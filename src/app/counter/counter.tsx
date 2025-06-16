"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incclick, setIncclick] = useState(0);
  const [decclick, setDecclick] = useState(0);

  const  increment = () => {
    setCount(count + 1);
    console.log("my count ratio",count);
    console.log("my click ratio with increment",incclick);
    console.log("my click ratio with decrement",decclick);
    console.log("my click ratio with sum",incclick + decclick);
    setIncclick(incclick + 1);

  };

  const decrement = () => {
    setCount(count - 1);
    setDecclick(decclick + 1);
    console.log("my count ratio",count);
    console.log("my click ratio",incclick);
    console.log("my click ratio",decclick);
    console.log("my click ratio",incclick + decclick);
    if (count <= 0) {
      alert("Count is already at zero, cannot decrement further.");
      return;
      
    }
    setCount(count - 1);
    console.log("Decremented count:", count - 1);
    console.log("Decrement click count:", decclick + 1);
    console.log("my count ratio",count);
    console.log("my click ratio",incclick);
    console.log("my click ratio",decclick);
    console.log("my click ratio",incclick + decclick);
    if (count === 0) {
      console.log("Count is already at zero, cannot decrement further.");
      return;
    }
  };

  const reset = () => {
    setCount(0);
    setIncclick(0);
    setDecclick(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Counter</h1>
        <p className="mt-4 text-lg">
            This is a simple counter application built with React and Tailwind CSS. 
            You can increment, decrement, and reset the counter.
        </p>
      <p className="mt-4 text-lg">Click to increment: {incclick}</p>
      <p className="mt-4 text-lg">Click to decrement: {decclick}</p>
      <p className="mt-4 text-lg">Click to reset: {incclick + decclick}</p>
      <p className="mt-4 text-lg">Count: {count}</p>
      <p className="mt-4 text-lg">Click count: {incclick + decclick}</p>
      <p className="mt-4 text-lg">Decrement click count: {decclick}</p>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={decrement}
          disabled={count === 0}
          className={`px-4 py-2 text-white rounded transition-transform hover:scale-105 ${
            count === 0
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-500 cursor-pointer"
          }`}
        >
          Decrement
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer transition-transform hover:scale-105"
        >
          Increment
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 text-white bg-gray-500 rounded cursor-pointer transition-transform hover:scale-105"
        >
          <span className="text-sm">Click to reset</span>
        </button>
      </div>
    </div>
  );
}
