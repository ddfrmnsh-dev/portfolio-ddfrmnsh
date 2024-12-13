"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const capitalize = (str: string) =>
      str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

    const label = capitalize(segment);

    const href = "/" + segments.slice(0, index + 1).join("/");

    return { label, href };
  });

  return (
    <nav
      aria-label="breadcrumb"
      className="bg-white px-5 py-4 dark:bg-gray-800 mt-2 rounded-lg"
    >
      <ol className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-primary flex items-center"
          >
            <HiHome className="mr-1 text-lg" />
            Home
          </Link>
        </li>

        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2 text-gray-400">&gt;</span>
            <Link
              href={crumb.href}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary ${
                index === breadcrumbs.length - 1 ? "font-semibold" : ""
              }`}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
