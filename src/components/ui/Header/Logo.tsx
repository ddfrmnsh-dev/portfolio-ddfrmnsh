import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export interface LogoProps {
  open: boolean;
}
export default function Logo({ open }: LogoProps) {
  return (
    <>
      <div className="font-bold text-2xl cursor-pointer flex items-center">
        <Link href="/">De.{"{dev}"}</Link>
      </div>
      <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
    </>
  );
}
