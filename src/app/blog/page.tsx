// import { Metadata } from "next";
// import React from "react";

// type Props = {};
// export const metadata: Metadata = {
//   title: "My Awesome Website",
//   description: "Welcome to my awesome website built with Next.js",
//   keywords: "Next.js, SEO, website",
//   openGraph: {
//     title: "My Awesome Website",
//     description: "Explore my awesome website",
//     url: "https://my-awesome-website.com",
//     siteName: "My Awesome Website",
//     images: [
//       {
//         url: "/image/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Preview Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "My Awesome Website",
//     description: "Welcome to my awesome website",
//     images: "https://my-awesome-website.com/images/twitter-image.jpg",
//   },
// };

// export default function Page({}: Props) {
//   return (
//     <>
//       <div>Halaman Blogs</div>;
//     </>
//   );
// }

// file: app/blog/page.tsx
import { blogPosts } from "./data";
import BlogCard from "../../components/BlogCard";
import { Metadata } from "next";

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
    <div className="p-6">
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
    </div>
  );
}
