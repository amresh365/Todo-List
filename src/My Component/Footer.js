import React from "react";

export default function Footer() {
  let footerStyle = {
    // marginTop: "320px",
    position: "relative",
    top: "30vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">copyright &copy; myToDoList.com</p>
    </footer>
  );
}
