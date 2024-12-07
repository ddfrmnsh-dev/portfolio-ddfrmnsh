// file: components/BlogCard.tsx
import Link from "next/link";

export default function BlogCard({ title, description, slug }: { title: string; description: string; slug: string }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link href={`/blog/${slug}`}>Read More</Link>
        </div>
    );
}
