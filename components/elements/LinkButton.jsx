import React from "react";
import Link from "next/link";

const LinkButton = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="text-lg bg-white font-bold px-4 py-2 rounded-md border border-green-800"
    >
      {name}
    </Link>
  );
};

export default LinkButton;
