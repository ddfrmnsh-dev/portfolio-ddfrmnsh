"use client";
import { useState } from "react";
import IconMoon from "../Icon/IconMoon";
import IconSun from "../Icon/IconSun";

export default function DarkMode() {
  const [check, setIsCheck] = useState(false);
  return (
    <div
      onClick={() => setIsCheck(!check)}
      className="hidden md:block md:pl-4 pt-1"
    >
      {!check ? <IconSun /> : <IconMoon />}
    </div>
  );
}
