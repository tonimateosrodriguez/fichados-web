import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fichados",
  description:
    "Guías, normativa y recursos sobre fichaje laboral en España",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
