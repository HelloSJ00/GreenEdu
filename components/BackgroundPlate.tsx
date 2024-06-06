import React from "react";

export default function BackgroundPlate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border-4 border-green-500 p-8 rounded-lg shadow-lg">
      {children}
    </div>
  );
}
