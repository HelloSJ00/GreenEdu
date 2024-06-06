"use client";
import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-lg bg-white font-bold px-4 py-2 rounded-md border border-green-800"
    >
      {name}
    </button>
  );
};

export default Button;
