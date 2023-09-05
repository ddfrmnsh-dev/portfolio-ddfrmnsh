'use client';
import React, { useEffect, useState } from 'react'
import { Navbar } from 'flowbite-react'
import Link from 'next/link'

type Props = {}

export default function DefaultNavbar({}: Props) {

  // const [windowWidth, setWindowWidth] = useState<number>(window.screen.width);
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.screen.width);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   setIsMobile(windowWidth > 640);
  // }, [windowWidth]);
  return (
    <>
      <Navbar
    rounded
    className='md:w-1/2 container'
    >
    <Navbar.Brand
      href="https://github.com/ddfrmnsh-dev/ddfrmnsh-dev"
    >
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        The Child
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Link
        href="/"
      >
        <p>
          Home
        </p>
      </Link>
      <Link
        href="/project"
      >
        <p>
          Project
        </p>
      </Link>
      <Link href="/blog">
        Blog
      </Link>
    </Navbar.Collapse>
      </Navbar>
  </>
  )
}