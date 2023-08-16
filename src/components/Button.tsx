import Link from "next/link"
import React from "react"

type ButtonProps = {
    name: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ name, link}) => {
    return (
        <>
        <Link 
        href={link} 
        className="text-base font-semibold text-white bg-black py-2 px-6 rounded-full hover-shadow-lg
        hover:opacity-80 transition duration-300 ease-in-out">
            {name}
        </Link>
        </>
    )
}

export default Button
