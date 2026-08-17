import React from "react";

function Btn({ children, className = "" }) {
  return (
    <button
      className="p-2 mx-2 border-2 rounded-2xl">
      {children}
    </button>
  );
}

export default Btn;
