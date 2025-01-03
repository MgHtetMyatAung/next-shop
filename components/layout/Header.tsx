import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" border-b">
      <nav className=" container flex justify-between items-center h-[70px]">
        <Link href={"/"} className=" text-lg font-bold">
          INNO-SHOP
        </Link>
        <ul className=" gap-4 items-center hidden md:flex">
          <li>Home</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
        <button>Login</button>
      </nav>
    </header>
  );
}
