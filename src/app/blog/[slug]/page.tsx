import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Lightbulb,
} from "lucide-react";
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
    alternates: { canonical: `/blog/${slug}` },
  };
}

/* ---------- Helpers ---------- */

const renderBold = (text: string) => {
  // Divide el texto en fragmentos de **negrita** y enlaces markdown [texto](url),
  // dejando el resto como texto plano.
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const className =
        "text-primary underline underline-offset-2 hover:no-underline";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
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
        case "verdict": {
          const map = {
            si: { Icon: CheckCircle2, wrap: "border-[#047857]/30 bg-green-50", accent: "text-[#047857]", iconBg: "bg-[#047857]/15" },
            no: { Icon: XCircle, wrap: "border-[#be123c]/30 bg-red-50", accent: "text-[#be123c]", iconBg: "bg-[#be123c]/15" },
            depende: { Icon: AlertTriangle, wrap: "border-amber-400/40 bg-amber-50", accent: "text-amber-700", iconBg: "bg-amber-400/20" },
          } as const;
          const v = map[(section.variant as keyof typeof map) ?? "depende"] ?? map.depende;
          return (
            <div
              key={i}
              role="note"
              className={`my-2 flex flex-col gap-4 rounded-xl border ${v.wrap} p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6`}
            >
              <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${v.iconBg} ${v.accent}`}>
                <v.Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0 space-y-1.5">
                {section.title && (
                  <p className={`text-base font-bold sm:text-lg ${v.accent}`}>{section.title}</p>
                )}
                <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {renderBold(section.text || "")}
                </p>
              </div>
            </div>
          );
        }
        case "callout": {
          const map = {
            info: { Icon: Info, wrap: "border-primary/20 border-l-primary bg-primary/5", accent: "text-primary", body: "text-foreground/80" },
            aviso: { Icon: AlertTriangle, wrap: "border-amber-300 border-l-amber-500 bg-amber-50", accent: "text-amber-700", body: "text-amber-900" },
            clave: { Icon: Lightbulb, wrap: "border-[#047857]/30 border-l-[#047857] bg-green-50", accent: "text-[#047857]", body: "text-[#065f46]" },
          } as const;
          const c = map[(section.variant as keyof typeof map) ?? "info"] ?? map.info;
          return (
            <div
              key={i}
              role="note"
              className={`my-2 flex gap-3 rounded-lg border border-l-4 ${c.wrap} p-4 sm:gap-4 sm:p-5`}
            >
              <c.Icon className={`h-5 w-5 flex-shrink-0 ${c.accent}`} aria-hidden="true" />
              <div className="min-w-0 space-y-1">
                {section.title && (
                  <p className={`text-sm font-semibold ${c.accent}`}>{section.title}</p>
                )}
                <p className={`text-sm leading-relaxed ${c.body}`}>
                  {renderBold(section.text || "")}
                </p>
              </div>
            </div>
          );
        }
        case "table":
          return (
            <div
              key={i}
              className="my-2 overflow-hidden rounded-xl border border-primary/20 bg-primary/5"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  {section.title && (
                    <caption className="sr-only">{section.title}</caption>
                  )}
                  <thead>
                    <tr className="border-b border-primary/20 bg-primary/10 text-left">
                      {section.headers?.map((h, hi) => (
                        <th
                          key={hi}
                          scope="col"
                          className="whitespace-nowrap px-4 py-3 text-left font-semibold text-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows?.map((row, ri) => (
                      <tr
                        key={ri}
                        className={`border-b border-primary/10 last:border-0 ${
                          section.highlightRow === ri
                            ? "bg-primary/10 font-semibold"
                            : ri % 2 === 1
                            ? "bg-card/40"
                            : ""
                        }`}
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`px-4 py-3 align-top ${
                              ci === 0
                                ? "font-semibold text-foreground"
                                : "text-foreground/80"
                            }`}
                          >
                            {renderBold(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

  /* JSON-LD FAQPage (solo si el post tiene FAQs) */
  const faqJsonLd =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader showSectionLinks={false} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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

      {/* FAQ */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Preguntas frecuentes
            </h2>
            <Accordion className="space-y-4">
              {article.faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

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
