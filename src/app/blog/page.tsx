import { Metadata } from "next";
import React from "react";

type Props = {};
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
        url: "/image/og-image.png",
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

export default function Page({}: Props) {
  return (
    <>
      <div>Halaman Blogs</div>;
    </>
  );
}
