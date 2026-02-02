import { Package, Truck, AlertTriangle, Shield, CreditCard, Headphones, LucideIcon } from "lucide-react";

// Category data mapping
export const categoryConfig: Record<string, { icon: LucideIcon }> = {
  products: { icon: Package },
  delivery: { icon: Truck },
  issues: { icon: AlertTriangle },
  warranty: { icon: Shield },
  payment: { icon: CreditCard },
  support: { icon: Headphones },
};