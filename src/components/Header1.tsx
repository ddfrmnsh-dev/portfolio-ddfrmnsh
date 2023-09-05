// import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Props = {}

// const [isActive, setIsActive] = useState(null)

// useEffect(() => {
//   console.log(`Menu Akltif : ${isActive}`)
// }, [isActive]);

export default function Header({}: Props) {
  return (
    <>
      <nav className='container bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
        <div className='flex flex-wrap items-center md:justify-center mx-auto px-2 justify-between'>
          <div className='items-center justify-between w-full md:flex md:w-auto md:order-1'>
          <ul className="justify-center flex flex-row p-2 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <a href="#" className='flex items-center'>
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                <h2 className='text-dark px-4'>Dede Firmansah</h2>
              </span>
            </a>
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page"
                // label="Home"
                // onClick={() => setIsActive("Home")}
                // active={isActive === "Home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                // label="Service"
                // onClick={() => setIsActive("Project")}
                // active={isActive === "Project"}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                // label="Service"
                // onClick={() => setIsActive("Service")}
                // active={isActive === "Service"}
              >
                Services
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  )
}