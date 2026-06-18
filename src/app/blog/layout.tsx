import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fichados",
  description:
    "Guías, normativa y recursos sobre fichaje laboral en España",
  // Canonical del índice /blog. Evita que las variantes con query (?cat=...)
  // se indexen como duplicados. Los artículos /blog/[slug] sobreescriben este
  // canonical con el suyo propio en su generateMetadata.
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
