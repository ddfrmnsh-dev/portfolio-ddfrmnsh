// file: components/BlogDetail.tsx
export default function BlogDetail({
  title,
  content,
  author,
  date,
}: {
  title: string,
  content: string,
  author: string,
  date: string,
}) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-2">
        By {author} on {date}
      </p>
      <div className="text-gray-700">{content}</div>
    </div>
  );
}
