import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-primary text-white">
      <Link to="/" className="text-2xl font-bold">
        PhoneBook
      </Link>
      <Link to="/add"
        className="inline-flex items-center justify-center w-10 h-10 bg-dark hover:bg-secondary rounded-full text-2xl font-bold"
      >
        +
      </Link>
    </nav>
  );
}

export default NavBar;
