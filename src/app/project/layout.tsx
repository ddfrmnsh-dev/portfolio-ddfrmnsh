import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string[] };
}) {
  const pathname = params?.slug ? `/${params.slug.join("/")}` : "/";

  return <div>{children}</div>;
}
