import React from "react";
import "./Page.css";

function Page({ children, size = "A4", style }) {
  return (
    <div className={`Page ${size}`} style={style}>
      {children}
    </div>
  );
}

export default Page;
