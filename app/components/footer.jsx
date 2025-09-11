import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-4 sm:px-10 md:px-20 lg:px-30 mt-8 mb-8 text-center sm:text-left">
      {/* Left */}
      <div className="text-xs sm:text-sm text-gray-800">
        Made with <span className="text-[#6531b3] font-bold">love</span>
      </div>

      {/* Right */}
      <div className="text-xs sm:text-sm text-gray-800">
        &copy;2025 Artalia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
