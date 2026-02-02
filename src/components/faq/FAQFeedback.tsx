import { useState } from "react";
import { ThumbsUp, ThumbsDown, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQFeedbackProps {
  questionId: string;
}

type FeedbackState = "idle" | "yes" | "no";

export function FAQFeedback({ questionId }: FAQFeedbackProps) {
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const [isHovering, setIsHovering] = useState<"yes" | "no" | null>(null);

  const handleFeedback = (value: "yes" | "no") => {
    setFeedback(value);
    console.log(`FAQ ${questionId}: User found answer ${value === "yes" ? "helpful" : "not helpful"}`);
  };

  return (
    <div className="flex items-center gap-4 py-1">
      <AnimatePresence mode="wait">
        {feedback === "idle" ? (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-[13px] font-medium" style={{ color: '#94A3B8' }}>Was this helpful?</span>
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => handleFeedback("yes")}
                onHoverStart={() => setIsHovering("yes")}
                onHoverEnd={() => setIsHovering(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all duration-300",
                  "border-2",
                  isHovering === "yes"
                    ? "text-white shadow-lg"
                    : ""
                )}
                style={{
                  background: isHovering === "yes" 
                    ? 'linear-gradient(135deg, #8FD3A8 0%, #6BCF9B 100%)'
                    : '#FFFFFF',
                  color: isHovering === "yes" ? '#FFFFFF' : '#94A3B8',
                  borderColor: isHovering === "yes" ? 'transparent' : '#E6E8EC',
                  boxShadow: isHovering === "yes" ? '0 6px 16px rgba(143, 211, 168, 0.3)' : undefined,
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: isHovering === "yes" ? [0, -12, 0] : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <ThumbsUp className="h-4 w-4" />
                </motion.div>
                Yes
              </motion.button>
              <motion.button
                onClick={() => handleFeedback("no")}
                onHoverStart={() => setIsHovering("no")}
                onHoverEnd={() => setIsHovering(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all duration-300",
                  "border-2",
                  isHovering === "no"
                    ? "text-white shadow-lg"
                    : ""
                )}
                style={{
                  background: isHovering === "no" 
                    ? 'linear-gradient(135deg, #FF2F92 0%, #FF6FAE 100%)'
                    : '#FFFFFF',
                  color: isHovering === "no" ? '#FFFFFF' : '#94A3B8',
                  borderColor: isHovering === "no" ? 'transparent' : '#E6E8EC',
                  boxShadow: isHovering === "no" ? '0 6px 16px rgba(255, 47, 146, 0.3)' : undefined,
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: isHovering === "no" ? [0, 12, 0] : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <ThumbsDown className="h-4 w-4" />
                </motion.div>
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center gap-3 px-1"
          >
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 500, damping: 25 }}
              className="flex h-9 w-9 items-center justify-center rounded-full shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #8FD3A8 0%, #6BCF9B 100%)',
              }}
            >
              <Check className="h-5 w-5 text-white" />
            </motion.span>
            <span className="text-[13px] font-semibold" style={{ color: '#000000' }}>
              Thanks for your feedback!
            </span>
            <motion.span
              initial={{ opacity: 0, x: -10, rotate: -45 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="h-4 w-4" style={{ color: '#FF2F92' }} />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
