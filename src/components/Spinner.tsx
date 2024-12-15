"use client";

import { Spinner } from "flowbite-react";

export default function Spinners() {
  return (
    <>
      <div className="text-center">
        <Spinner
          theme={customTheme}
          aria-label="Center-aligned spinner example"
          size="lg"
          color="custom"
        />
      </div>
    </>
  );
}

const customTheme = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400",
    custom: "fill-primary",
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: "",
      },
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: "",
      },
    },
  },
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  },
};
