import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Future: fetch blog posts from CMS (Supabase, MDX, etc.)
// export async function generateStaticParams() {
//   const posts = await fetchBlogPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Blog Fichados`,
    description: `Artículo sobre ${slug.replace(/-/g, " ")} en el blog de Fichados.`,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Future: fetch post content from CMS
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Próximamente</h1>
        <p className="text-muted-foreground">
          Este artículo estará disponible pronto.
        </p>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
