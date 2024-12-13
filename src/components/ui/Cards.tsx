import { Card } from "flowbite-react";
import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  imgPosition: boolean;
  classBg: string;
}
export default function Cards({
  title,
  desc,
  img,
  imgPosition,
  classBg,
}: CardProps) {
  return (
    <>
      <Card
        theme={customTheme}
        className={`max-w-md h-full ${classBg}`}
        imgAlt={title}
        imgSrc={img}
        horizontal={imgPosition}
      >
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </Card>
    </>
  );
}

const customTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-4",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
