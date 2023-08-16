'use client';
import { Card } from "flowbite-react";

interface ImgProps {
  title: string;
  desc: string;
  img: string;
}
export default function CardImg({title, desc, img }: ImgProps) {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={img}
      style={{ marginBottom: 10 }}
      >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <>
          {title}
        </>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <>
          {desc}
        </>
      </p>
    </Card>
  )
}