import Link from "next/link";

export default function LinkNavigation() {
  return (
    <>
      <li className="md:ml-8 md:my-0 my-7 font-semibold">
        <Link
          href="/"
          className="text-gray-800 hover:text-blue-400 duration-500"
        >
          Home
        </Link>
      </li>
      <li className="md:ml-8 md:my-0 my-7 font-semibold">
        <Link
          href="/project"
          className="text-gray-800 hover:text-blue-400 duration-500"
        >
          Project
        </Link>
      </li>
      <li className="md:ml-8 md:my-0 my-7 font-semibold">
        <Link
          href="/blog"
          className="text-gray-800 hover:text-blue-400 duration-500"
        >
          Blog
        </Link>
      </li>
    </>
  );
}
