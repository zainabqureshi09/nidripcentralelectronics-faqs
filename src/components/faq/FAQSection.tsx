import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQHero } from "./FAQHero";
import { FAQAccordion } from "./FAQAccordion";
import { FAQCategoryNav } from "./FAQCategoryNav";
import { categoryConfig } from "./constants";
import { AnimatedBackground } from "./AnimatedBackground";
import { faqCategories, searchFAQs, getAllFAQItems } from "@/data/faqData";
import { SearchX, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredItems = useMemo(() => {
    return searchFAQs(searchQuery);
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  const categories = useMemo(() => {
    return faqCategories.map((cat) => ({
      id: cat.id,
      title: cat.title,
      icon: categoryConfig[cat.id]?.icon || categoryConfig.products.icon,
      count: cat.items.length,
    }));
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMobileNavOpen(false);
    setSearchQuery("");
    
    // Smooth scroll to category
    const element = sectionRefs.current[categoryId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // Update active category based on scroll position
  useEffect(() => {
    if (isSearching) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const category of faqCategories) {
        const element = sectionRefs.current[category.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearching]);

  return (
    <div className="min-h-screen" style={{ background: '#F7F8FA' }}>
      {/* Top Header with Gradient - Desktop & Mobile */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12 sm:py-16 md:py-20 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                {/* Badge */}
                <div className="mb-6 sm:mb-8">
                  <motion.div
                    className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm border text-foreground text-sm font-bold shadow-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-foreground" />
                    </span>
                    24/7 SUPPORT CENTER
                  </motion.div>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight tracking-tighter typography-display">
                  How can we help you today?
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto font-sans typography-subheadline">
                  Get instant answers from our knowledge base. Search below or browse by category.
                </p>

                {/* Search Box */}
                <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-2">
                  <FAQHero searchValue={searchQuery} onSearchChange={setSearchQuery} />
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-foreground"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-1 typography-display">{getAllFAQItems().length}+</div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground/90 uppercase tracking-wider typography-caption">Articles</div>
                  </div>
                  <div className="h-px w-8 sm:w-12 bg-foreground/20 sm:h-12 sm:w-px" />
                  <div className="flex flex-col items-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-1 typography-display">{faqCategories.length}</div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground/90 uppercase tracking-wider typography-caption">Categories</div>
                  </div>
                  <div className="h-px w-8 sm:w-12 bg-foreground/20 sm:h-12 sm:w-px" />
                  <div className="flex flex-col items-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-1 typography-display">99%</div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground/90 uppercase tracking-wider typography-caption">Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-responsive py-responsive">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
            {/* Sidebar - visible on medium screens and larger */}
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl border graphic-shadow"
                  style={{
                    background: '#FFFFFF',
                    borderColor: '#E6E8EC',
                    boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6 typography-caption" style={{ color: '#000000' }}>
                    Browse by Category
                  </h3>
                  <FAQCategoryNav
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryClick={handleCategoryClick}
                  />
                </motion.div>

                {/* Help Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mt-6 p-6 rounded-2xl border shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(204, 38, 117, 0.05) 0%, rgba(58, 140, 109, 0.05) 100%)',
                    borderColor: 'rgba(204, 38, 117, 0.15)',
                  }}
                >
                      <h4 className="font-bold text-foreground mb-2 text-[15px]">Still need help?</h4>
                      <p className="text-[13px] text-muted-foreground mb-5 leading-relaxed">
                        Our support team is ready to assist you with any questions.
                      </p>
                      <motion.button
                        className="w-full py-3 px-4 rounded-xl text-white font-semibold text-sm shadow-lg transition-all duration-300 graphic-transform"
                        style={{
                          background: 'linear-gradient(135deg, #CC2675 0%, #CC598B 100%)',
                          boxShadow: '0 8px 20px rgba(204, 38, 117, 0.25)',
                        }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: '0 12px 28px rgba(204, 38, 117, 0.35)',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Contact Support
                      </motion.button>
                    </motion.div>
                  </div>
                </aside>

            {/* Main Content */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                  <AnimatePresence mode="wait">
                    {isSearching ? (
                      <motion.div
                        key="search-results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {filteredItems.length > 0 ? (
                          <>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                              <p className="text-sm text-muted-foreground typography-body">
                                <span className="font-semibold text-foreground">{filteredItems.length}</span> result{filteredItems.length !== 1 && "s"} for "{searchQuery}"
                              </p>
                              <button
                                onClick={() => setSearchQuery("")}
                                className="text-sm text-primary hover:text-primary-hover font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10 typography-caption"
                              >
                                Clear search
                              </button>
                            </div>
                            <FAQAccordion
                              items={filteredItems.map((item) => ({
                                id: item.id,
                                question: item.question,
                                answer: item.answer,
                                icon: item.icon,
                              }))}
                            />
                          </>
                        ) : (
                          <div className="text-center py-12 sm:py-20">
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary mb-6"
                            >
                              <SearchX className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-foreground mb-3 typography-headline">
                              No results found
                            </h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-6 typography-body">
                              We couldn't find any questions matching "{searchQuery}". Try a different search term or browse categories.
                            </p>
                            <button
                              onClick={() => setSearchQuery("")}
                              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:bg-primary-hover transition-colors graphic-transform"
                            >
                              Clear search
                            </button>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="categories"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-12"
                      >
                        {faqCategories.map((category, categoryIndex) => (
                          <section
                            key={category.id}
                            ref={(el) => (sectionRefs.current[category.id] = el)}
                            id={category.id}
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5"
                            >
                              <motion.div
                                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl shadow-sm graphic-transform"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(204, 38, 117, 0.08) 0%, rgba(58, 140, 109, 0.08) 100%)',
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <div className="text-primary">
                                  {(() => {
                                    const Icon = categoryConfig[category.id]?.icon;
                                    return Icon ? <Icon className="h-4 w-4 sm:h-5 sm:w-5" /> : null;
                                  })()}
                                </div>
                              </motion.div>
                              <div className="mt-2 sm:mt-0">
                                <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight typography-headline">
                                  {category.title}
                                </h2>
                                <p className="text-xs sm:text-[13px] text-muted-foreground mt-1 typography-caption">
                                  {category.items.length} question{category.items.length !== 1 && "s"}
                                </p>
                              </div>
                            </motion.div>

                            <FAQAccordion
                              items={category.items.map((item) => ({
                                id: item.id,
                                question: item.question,
                                answer: item.answer,
                                icon: item.icon,
                              }))}
                            />
                          </section>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </main>

      {/* Mobile Category Filter */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b" style={{ borderColor: '#E6E8EC' }}>
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #CC2675 0%, #CC598B 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(204, 38, 117, 0.25)',
            }}
          >
            <div className="flex items-center gap-2">
              <Menu className="h-5 w-5" />
              <span className="truncate">Browse Categories</span>
            </div>
            <motion.div
              animate={{ rotate: isMobileNavOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileNavOpen ? <X className="h-5 w-5" /> : <span className="text-white/80">({faqCategories.length})</span>}
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white border-t"
              style={{ borderColor: '#E6E8EC' }}
            >
              <div className="container mx-auto px-4 py-4 sm:py-6">
                <FAQCategoryNav
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Content Container */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="space-y-8">
            {/* Mobile Category Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border-light shadow-sm w-full justify-between"
              >
                <span className="font-medium text-foreground truncate">
                  {activeCategory
                    ? categories.find((c) => c.id === activeCategory)?.title || "All Categories"
                    : "Browse Categories"}
                </span>
                <motion.div
                  animate={{ rotate: isMobileNavOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileNavOpen ? (
                    <X className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Menu className="h-5 w-5 text-muted-foreground" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {isMobileNavOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3">
                      <div className="p-4 rounded-xl bg-card border border-border-light shadow-elevated">
                        <FAQCategoryNav
                          categories={categories}
                          activeCategory={activeCategory}
                          onCategoryClick={handleCategoryClick}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                {isSearching ? (
                  <motion.div
                    key="search-results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredItems.length > 0 ? (
                      <>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                          <p className="text-sm text-muted-foreground typography-body">
                            <span className="font-semibold text-foreground">{filteredItems.length}</span> result{filteredItems.length !== 1 && "s"} for "{searchQuery}"
                          </p>
                          <button
                            onClick={() => setSearchQuery("")}
                            className="text-sm text-primary hover:text-primary-hover font-medium transition-colors px-4 py-2 rounded-lg hover:bg-primary/10 typography-caption"
                          >
                            Clear search
                          </button>
                        </div>
                        <FAQAccordion
                          items={filteredItems.map((item) => ({
                            id: item.id,
                            question: item.question,
                            answer: item.answer,
                            icon: item.icon,
                          }))}
                        />
                      </>
                    ) : (
                      <div className="text-center py-12 sm:py-20">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/20 mb-6"
                        >
                          <SearchX className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 typography-headline">
                          No results found
                        </h3>
                        <p className="text-muted-foreground max-w-md mx-auto mb-6 typography-body">
                          We couldn't find any questions matching "{searchQuery}". Try a different search term or browse categories.
                        </p>
                        <button
                          onClick={() => setSearchQuery("")}
                          className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium shadow-md hover:bg-primary-hover transition-colors graphic-transform"
                        >
                          Clear search
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="categories"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-12"
                  >
                    {faqCategories.map((category, categoryIndex) => (
                      <section
                        key={category.id}
                        ref={(el) => (sectionRefs.current[category.id] = el)}
                        id={category.id}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                          className="flex items-start gap-3 mb-5"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary flex-shrink-0 graphic-transform">
                            {(() => {
                              const Icon = categoryConfig[category.id]?.icon;
                              return Icon ? <Icon className="h-5 w-5" /> : null;
                            })()}
                          </div>
                          <div className="overflow-hidden">
                            <h2 className="text-lg font-semibold text-foreground truncate typography-headline">
                              {category.title}
                            </h2>
                            <p className="text-sm text-muted-foreground typography-caption">
                              {category.items.length} question{category.items.length !== 1 && "s"}
                            </p>
                          </div>
                        </motion.div>

                        <FAQAccordion
                          items={category.items.map((item) => ({
                            id: item.id,
                            question: item.question,
                            answer: item.answer,
                            icon: item.icon,
                          }))}
                        />
                      </section>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
