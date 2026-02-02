import { useState, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FAQSearch({ value, onChange, className }: FAQSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div
      className={cn("relative", className)}
      animate={{
        scale: isFocused ? 1.005 : 1,
      }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Subtle gradient glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[20px] blur-2xl"
        style={{
          background: 'linear-gradient(135deg, #FF2F92 0%, #FF6FAE 50%, #8FD3A8 100%)',
        }}
        animate={{
          opacity: isFocused ? 0.15 : 0,
          scale: isFocused ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <motion.div
            animate={{ 
              scale: isFocused ? 1.1 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Search 
              className="h-5 w-5 transition-colors duration-300" 
              style={{ 
                color: isFocused ? '#FF2F92' : '#94A3B8' 
              }}
            />
          </motion.div>
        </div>
        
        <motion.input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for answers..."
          className={cn(
            "w-full h-16 pl-14 pr-14 rounded-[20px] font-medium text-[15px]",
            "transition-all duration-300 ease-out",
            "focus:outline-none"
          )}
          style={{
            background: '#FFFFFF',
            color: '#000000',
            border: isFocused 
              ? '2px solid transparent'
              : '2px solid #E6E8EC',
            backgroundImage: isFocused 
              ? 'linear-gradient(white, white), linear-gradient(135deg, #FF2F92, #FF6FAE, #8FD3A8)'
              : undefined,
            backgroundOrigin: 'border-box',
            backgroundClip: isFocused ? 'padding-box, border-box' : undefined,
            boxShadow: isFocused 
              ? '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(255, 47, 146, 0.06)'
              : '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
          }}
          whileFocus={{
            scale: 1.005,
          }}
        />
        
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                onChange("");
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-5 transition-colors"
              style={{ color: '#94A3B8' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
            >
              <motion.div 
                className="p-1.5 rounded-lg transition-colors"
                style={{ background: 'transparent' }}
                whileHover={{ scale: 1.1, background: '#F2F4F7' }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="h-4 w-4" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
