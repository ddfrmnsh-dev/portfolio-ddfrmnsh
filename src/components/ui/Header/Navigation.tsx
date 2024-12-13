import Link from "next/link";

export default function LinkNavigation() {
  return (
    <>
      <li className="md:ml-4 md:my-0 my-7 font-semibold">
        <Link
          href="/project"
          className="text-gray-800 hover:text-primary duration-500"
        >
          Project
        </Link>
      </li>
      <li className="md:ml-4 md:my-0 my-7 font-semibold">
        <Link
          href="/article"
          className="text-gray-800 hover:text-primary duration-500"
        >
          Blog
        </Link>
      </li>
    </>
  );
}
