import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-3 py-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
