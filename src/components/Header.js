import React from "react";
import Logo from "./../images/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-4" />
      </div>
      <div className="text-sm flex place-items-center">
        <div>Senin, 22 Juli 2024 - 15:17</div>
      </div>
    </header>
  );
};

export default Header;
