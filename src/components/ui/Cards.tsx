import { Button, Card } from "flowbite-react";
import Link from "next/link";
import {
  SiLaravel,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiGo,
  SiPostgresql,
  SiJsonwebtokens,
  SiGin,
  SiVite,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

interface CardProps {
  title: string;
  desc: string;
  img: string;
  imgPosition: boolean;
  classBg: string;
  showButton: boolean;
  linkExternal: boolean;
  link: string;
  technologies: string[];
}

const ICON_MAP: Record<string, React.FC<{ size?: number; color?: string }>> = {
  react: SiReact,
  laravel: SiLaravel,
  mysql: SiMysql,
  tailwind: SiTailwindcss,
  go: SiGo,
  pqsql: SiPostgresql,
  jwt: SiJsonwebtokens,
  gin: SiGin,
  vite: SiVite,
  express: SiExpress,
  nodejs: SiNodedotjs,
};

export default function Cards({
  title,
  desc,
  img,
  imgPosition,
  classBg,
  showButton,
  linkExternal,
  link,
  technologies,
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
        <div className="h-full">
          <h4 className="mb-2 text-lg md:text-xl font-bold tracking-normal text-gray-900 dark:text-white">
            {title}
          </h4>
          <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400 text-left">
            {desc}
          </p>
          <div className="flex space-x-4 my-3">
            {technologies?.map((tech) => {
              const IconComponent = ICON_MAP[tech];
              return IconComponent ? (
                <IconComponent key={tech} size={30} color="gray" />
              ) : null;
            })}
          </div>
          {showButton &&
            (linkExternal ? (
              <Button
                href={link}
                target="_blank"
                className="inline-flex text-white bg-primary rounded-md"
              >
                Click here
              </Button>
            ) : (
              <Link href={link}>
                <Button className="inline-flex text-white bg-primary rounded-md">
                  Click here
                </Button>
              </Link>
            ))}
        </div>
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
