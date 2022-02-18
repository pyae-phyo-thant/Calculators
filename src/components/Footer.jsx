import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <div className="bg-[rgba(30,41,59)]">
      <div className="p-4 mx-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-white">
            <span className="text-[rgba(100,116,139)]">
              Copyright © {date.getFullYear()}
            </span>{" "}
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
