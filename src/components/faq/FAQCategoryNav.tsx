import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { categoryConfig } from "./constants";

interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  count: number;
}

interface FAQCategoryNavProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
  className?: string;
}

export function FAQCategoryNav({
  categories,
  activeCategory,
  onCategoryClick,
  className,
}: FAQCategoryNavProps) {
  return (
    <nav className={cn("space-y-1.5", className)}>
      <div className="mb-5 px-1">
        <h3 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: '#94A3B8' }}>
          Categories
        </h3>
      </div>
      
      {categories.map((category, index) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={() => onCategoryClick(category.id)}
            className={cn(
              "relative w-full flex items-center gap-3 px-3.5 py-3.5 rounded-xl text-left transition-all duration-300",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
              isActive
                ? "text-white shadow-lg"
                : ""
            )}
            style={{
              background: isActive 
                ? 'linear-gradient(135deg, #FF2F92 0%, #FF6FAE 100%)'
                : '#FFFFFF',
              color: isActive ? '#FFFFFF' : '#475569',
              boxShadow: isActive ? '0 8px 20px rgba(255, 47, 146, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = '#F2F4F7';
                e.currentTarget.style.color = '#000000';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#475569';
              }
            }}
            whileHover={{ scale: isActive ? 1 : 1.02, x: isActive ? 0 : 2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Active indicator */}
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            <motion.span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
              )}
              style={{
                background: isActive 
                  ? 'rgba(255, 255, 255, 0.2)'
                  : '#E8F7F0',
                color: isActive ? '#FFFFFF' : '#FF2F92',
                backdropFilter: isActive ? 'blur(8px)' : undefined,
              }}
              animate={{
                rotate: isActive ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-[18px] w-[18px]" />
            </motion.span>
            <span className="flex-1 font-semibold text-[15px]">{category.title}</span>
            <motion.span
              className={cn(
                "text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all duration-300"
              )}
              style={{
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : '#FF2F92',
                color: '#FFFFFF',
                backdropFilter: isActive ? 'blur(8px)' : undefined,
              }}
              whileHover={{ scale: 1.08 }}
              animate={{
                scale: isActive ? [1, 1.05, 1] : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {category.count}
            </motion.span>
          </motion.button>
        );
      })}
    </nav>
  );
}

