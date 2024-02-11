import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between items-center px-28 py-3  border-2">
      <img src="src\assets\swiggy-logo-1.svg" alt="" />
      <div>
        <ul className="flex gap-10 text-md items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <Button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="px-4 py-1 pb-1 text-md bg-blue-800 font-normal"
          >
            {btnName}
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
