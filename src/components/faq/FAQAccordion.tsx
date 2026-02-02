import { useState } from "react";
import { ChevronDown, HelpCircle, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FAQFeedback } from "./FAQFeedback";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <FAQAccordionItem
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggleItem(item.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <motion.div
      className={cn(
        "group rounded-2xl border overflow-hidden transition-all duration-300 ease-out",
        isOpen
          ? ""
          : ""
      )}
      style={{
        background: '#FFFFFF',
        borderColor: isOpen ? 'rgba(255, 47, 146, 0.3)' : '#E6E8EC',
        boxShadow: isOpen 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 47, 146, 0.1)'
          : '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
      }}
      whileHover={{ 
        y: isOpen ? 0 : -3,
        boxShadow: isOpen 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 47, 146, 0.1)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }}
      transition={{ duration: 0.2 }}
      onMouseEnter={(e) => {
        if (!isOpen) {
          e.currentTarget.style.background = '#F2F4F7';
        }
      }}
      onMouseLeave={(e) => {
        if (!isOpen) {
          e.currentTarget.style.background = '#FFFFFF';
        }
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-6 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-2xl"
        aria-expanded={isOpen}
      >
        <motion.span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
            isOpen
              ? "text-white shadow-lg"
              : ""
          )}
          style={{
            background: isOpen 
              ? 'linear-gradient(135deg, #FF2F92 0%, #FF6FAE 100%)'
              : '#E8F7F0',
            color: isOpen ? '#FFFFFF' : '#FF2F92',
            boxShadow: isOpen ? '0 8px 20px rgba(255, 47, 146, 0.25)' : undefined,
          }}
          animate={{
            scale: isOpen ? 1.05 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {item.icon || <HelpCircle className="h-5 w-5" />}
        </motion.span>
        <span
          className={cn(
            "flex-1 text-base font-semibold leading-relaxed transition-colors duration-200"
          )}
          style={{
            color: '#000000'
          }}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ 
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200"
          )}
          style={{
            background: isOpen ? 'rgba(255, 47, 146, 0.08)' : '#F2F4F7',
            color: isOpen ? '#FF2F92' : '#94A3B8',
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="ml-[64px] p-6 rounded-xl border"
                style={{
                  background: 'linear-gradient(135deg, rgba(143, 211, 168, 0.04) 0%, rgba(107, 207, 155, 0.02) 100%)',
                  borderColor: 'rgba(230, 232, 236, 0.5)',
                }}
              >
                <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: '#475569' }}>
                  {item.answer}
                </div>
              </div>
              <div className="ml-[64px] mt-5">
                <FAQFeedback questionId={item.id} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
