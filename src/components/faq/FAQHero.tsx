import { motion } from "framer-motion";
import { FAQSearch } from "./FAQSearch";
import { Sparkles } from "lucide-react";

interface FAQHeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function FAQHero({ searchValue, onSearchChange }: FAQHeroProps) {
  return (
    <FAQSearch
      value={searchValue}
      onChange={onSearchChange}
      className="w-full"
    />
  );
}
