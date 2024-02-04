import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between items-center px-28 py-3  border-2">
      <img src="src\assets\swiggy-logo-1.svg" alt="" />
      <div>
        <ul className="flex gap-10 text-md items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          {/* <Button className="px-4 py-1 pb-1 text-md bg-blue-800 font-normal">
            Cart
          </Button> */}
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
