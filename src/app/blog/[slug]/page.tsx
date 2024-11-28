// file: app/blog/[slug]/page.tsx
import { blogPosts } from "../data";
import BlogDetail from "../../../components/BlogDetail";
type Params = Promise<{ slug: string }>;
export default async function BlogView({ params }: { params: Params }) {

    const { slug } = await params;
    const post = blogPosts.find((blog) => blog.slug === slug);

    if (!post) {
        return <p>Blog not found.</p>;
    }

    return (
        <BlogDetail
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
        />
    );
}
