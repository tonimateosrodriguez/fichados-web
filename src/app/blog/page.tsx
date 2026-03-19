"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
  ARTICLES,
  CATEGORIES,
  CATEGORY_STYLES,
  CATEGORY_GRADIENTS,
  type ArticleCategory,
} from "@/data/blogArticles";

const PAGE_SIZE = 6;

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "Todos">("Todos");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Todos") return ARTICLES;
    return ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (cat: ArticleCategory | "Todos") => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader showSectionLinks={false} />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guías, normativa y recursos para que tu empresa cumpla con la ley.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content grid + sidebar */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Articles grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    {/* Image placeholder */}
                    <div className={`h-40 bg-gradient-to-br ${CATEGORY_GRADIENTS[article.category]} flex items-center justify-center`}>
                      <span className="text-4xl opacity-40 select-none">📄</span>
                    </div>

                    <div className="p-5 space-y-3">
                      <Badge variant="outline" className={`text-[10px] uppercase tracking-wider font-semibold ${CATEGORY_STYLES[article.category]}`}>
                        {article.category}
                      </Badge>

                      <h2 className="text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load more */}
              {hasMore && (
                <div className="text-center mt-10">
                  <Button variant="outline" size="lg" onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}>
                    Cargar más artículos
                  </Button>
                </div>
              )}

              {visibleArticles.length === 0 && (
                <p className="text-center text-muted-foreground py-16">
                  No hay artículos en esta categoría todavía.
                </p>
              )}
            </div>

            {/* Sidebar CTA – desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] p-6 text-primary-foreground space-y-4">
                <h3 className="text-lg font-bold leading-snug">
                  Cumple la ley de fichaje en 1 minuto
                </h3>
                <p className="text-sm opacity-90">
                  Evita sanciones de hasta 187.515 €. Alta rápida, sin permanencia.
                </p>
                <a href="https://app.fichados.es/registro-empresa" className="block">
                  <Button variant="secondary" className="w-full font-semibold">
                    Empezar ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile CTA banner */}
      <section className="lg:hidden px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] p-6 text-primary-foreground text-center space-y-3">
            <h3 className="text-lg font-bold">Cumple la ley de fichaje en 1 minuto</h3>
            <p className="text-sm opacity-90">Evita sanciones de hasta 187.515 €. Sin permanencia.</p>
            <a href="https://app.fichados.es/registro-empresa">
              <Button variant="secondary" className="font-semibold">
                Empezar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;
