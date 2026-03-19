import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
  ARTICLES,
  CATEGORY_STYLES,
  CATEGORY_GRADIENTS,
  type ContentSection,
} from "@/data/blogArticles";

/* ---------- Static params for SSG ---------- */

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

/* ---------- Dynamic metadata per article ---------- */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Fichados`,
    description: article.description,
  };
}

/* ---------- Helpers ---------- */

const renderBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const ContentRenderer = ({ sections }: { sections: ContentSection[] }) => (
  <div className="space-y-6">
    {sections.map((section, i) => {
      switch (section.type) {
        case "h2":
          return (
            <h2
              key={i}
              id={section.id}
              className="text-2xl font-bold text-foreground pt-4 scroll-mt-28"
            >
              {section.text}
            </h2>
          );
        case "h3":
          return (
            <h3
              key={i}
              id={section.id}
              className="text-xl font-semibold text-foreground pt-2 scroll-mt-28"
            >
              {section.text}
            </h3>
          );
        case "paragraph":
          return (
            <p key={i} className="text-foreground/80 leading-relaxed">
              {renderBold(section.text || "")}
            </p>
          );
        case "list":
          return (
            <ul key={i} className="space-y-2 pl-5">
              {section.items?.map((item, j) => (
                <li key={j} className="text-foreground/80 leading-relaxed list-disc">
                  {renderBold(item)}
                </li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote
              key={i}
              className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 rounded-r-lg pr-4"
            >
              <p className="text-foreground/80 italic leading-relaxed">
                {renderBold(section.text || "")}
              </p>
            </blockquote>
          );
        case "cta":
          return (
            <div
              key={i}
              className="rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] p-6 text-primary-foreground my-8"
            >
              <h3 className="text-lg font-bold mb-2">{section.text}</h3>
              <p className="text-sm opacity-90 mb-4">
                Evita sanciones de hasta 187.515 €. Sin permanencia.
              </p>
              <a href="https://app.fichados.es/registro-empresa">
                <Button variant="secondary" className="font-semibold">
                  Empezar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          );
        default:
          return null;
      }
    })}
  </div>
);

/* ---------- Page component ---------- */

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  /* JSON-LD Article structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Fichados",
      url: "https://fichados.es",
    },
    publisher: {
      "@type": "Organization",
      name: "Fichados",
      url: "https://fichados.es",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fichados.es/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader showSectionLinks={false} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/blog" />}>
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href={`/blog?cat=${article.category}`} />}>
                  {article.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1 max-w-[200px] sm:max-w-none">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Article header */}
      <section className="pt-6 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl space-y-5">
          <Badge
            variant="outline"
            className={`text-[10px] uppercase tracking-wider font-semibold ${CATEGORY_STYLES[article.category]}`}
          >
            {article.category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div
            className={`h-56 sm:h-72 md:h-80 rounded-xl bg-gradient-to-br ${CATEGORY_GRADIENTS[article.category]} flex items-center justify-center`}
          >
            <span className="text-6xl opacity-30 select-none">📄</span>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
            {/* Main content */}
            <article className="min-w-0">
              <ContentRenderer sections={article.content} />
            </article>

            {/* TOC sidebar */}
            {article.tableOfContents.length > 0 && (
              <aside className="hidden lg:block">
                <nav className="sticky top-28 space-y-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    En este artículo
                  </h4>
                  {article.tableOfContents.map((entry) => (
                    <a
                      key={entry.id}
                      href={`#${entry.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-l-2 border-border hover:border-primary pl-3"
                    >
                      {entry.title}
                    </a>
                  ))}
                </nav>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div
                    className={`h-36 bg-gradient-to-br ${CATEGORY_GRADIENTS[related.category]} flex items-center justify-center`}
                  >
                    <span className="text-4xl opacity-40 select-none">📄</span>
                  </div>
                  <div className="p-5 space-y-2">
                    <Badge
                      variant="outline"
                      className={`text-[10px] uppercase tracking-wider font-semibold ${CATEGORY_STYLES[related.category]}`}
                    >
                      {related.category}
                    </Badge>
                    <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {related.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container mx-auto max-w-5xl">
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
