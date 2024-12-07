"use client";
import { useState } from "react";
import Logo from "../ui/Header/Logo";
import LinkNavigation from "../ui/Header/Navigation";
import DarkMode from "../ui/Header/SwitchDarkMode";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="top-0 left-0 w-full sticky px-2 md:px-0 lg:px-96 z-10 shadow-md backdrop-blur-sm">
      <div
        className={`md:flex items-center justify-between ${
          open ? "bg-white" : "bg-transparent"
        } py-4 md:px-10 px-7`}
      >
        <div onClick={() => setOpen(!open)}>
          <Logo open={open} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 bg-white" : "top-[-490px] bg-transparent"
          }`}
        >
          <LinkNavigation />
        </ul>
        <DarkMode />
      </div>
    </div>
  );
}
