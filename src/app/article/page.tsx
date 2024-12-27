import { blogPosts } from "./data";
import BlogCard from "../../components/BlogCard";
import { Metadata } from "next";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Datepickers from "@/components/ui/Datepickers";

export const metadata: Metadata = {
  title: "My Awesome Website",
  description: "Welcome to my awesome website built with Next.js",
  keywords: "Next.js, SEO, website",
  openGraph: {
    title: "My Awesome Website",
    description: "Explore my awesome website",
    url: "https://my-awesome-website.com",
    siteName: "My Awesome Website",
    images: [
      {
        url: "/image/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Website",
    description: "Welcome to my awesome website",
    images: "https://my-awesome-website.com/images/twitter-image.jpg",
  },
};
export default function BlogList() {
  return (
    <>
      <div className="pb-5">
        <h3 className="font-semibold text-2xl">
          Article terpopuler minggu ini
        </h3>
        <p className="font-semibold text-xs md:text-lg uppercase text-primary tracking-[0.2em]">
          Artikel terpopuler minggu ini
        </p>
        <p className="font-semibold text-xs md:text-lg uppercase text-primary tracking-[0.2em]">
          Artikel terbaru
        </p>
      </div>
      <div className="h-56 gap-4">
        <Carousel theme={customTheme} pauseOnHover>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
      <div
        style={{
          border: "none",
          height: "1px",
          color: "#CADAE6",
          backgroundColor: "#CADAE6",
        }}
        className="my-8"
      ></div>
      <div className="">
        <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="flex py-4">
          <div>
            <p className="text-xs">
              Teknologi <span>•</span> 5 jam yang lalu
            </p>
            <h2 className="font-semibold text-base md:text-xl">
              Teknologi jaman sekarang kian berkembang dengan pesat dan terkini
            </h2>
            <p className="hidden md:block font-light text-xs md:text-md">
              Mungkin ini haru dikeluarkan dari sistem kami...
            </p>
          </div>
          <div className="pl-2 relative h-[80px] w-[100px] shrink-0">
            <Image
              src={"/image/bg-freelance-project.jpg"}
              alt="testing"
              fill
              objectFit="cover"
              className="rounded-e-md"
            />
          </div>
        </div>
        <div
          style={{
            border: "none",
            height: "1px",
            color: "#CADAE6",
            backgroundColor: "#CADAE6",
          }}
          className="my-2"
        ></div>
      </div>
      <Datepickers />
    </>
  );
}

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-md",
    snap: "snap-x",
  },
};
