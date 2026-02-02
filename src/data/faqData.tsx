import {
  Package,
  Truck,
  Clock,
  AlertTriangle,
  RotateCcw,
  Shield,
  CreditCard,
  Headphones,
  Globe,
  Timer,
} from "lucide-react";

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItemData[];
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  keywords: string[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "products",
    title: "Products",
    items: [
      {
        id: "products-1",
        question: "What products do you offer?",
        answer: (
          <div className="space-y-4">
            <p>
              NI Drip Central Electronics & Appliances offers a comprehensive range of home appliances and electronics, including:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Kitchen Appliances:</strong> Refrigerators, washing machines, dishwashers, ovens, microwaves, and small kitchen appliances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Home Electronics:</strong> Televisions, audio systems, and entertainment devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Laundry & Cleaning:</strong> Washing machines, tumble dryers, and vacuum cleaners</span>
              </li>
            </ul>
            <p>
              We stock products from leading brands and ensure all items meet our quality standards.
            </p>
          </div>
        ),
        icon: <Package className="h-5 w-5" />,
        keywords: ["products", "appliances", "electronics", "stock", "range", "offer"],
      },
      {
        id: "products-2",
        question: "Do you sell refurbished appliances?",
        answer: (
          <div className="space-y-4">
            <p>
              Yes, we offer a carefully curated selection of <strong className="text-foreground">refurbished appliances</strong> alongside our new products.
            </p>
            <div className="p-4 rounded-lg bg-primary-light border border-primary/10">
              <p className="text-foreground font-medium mb-2">Our Refurbishment Promise</p>
              <p className="text-sm">
                All refurbished items undergo thorough inspection, professional cleaning, and rigorous testing before being offered for sale. Each product is graded based on its cosmetic condition, and any defects are clearly disclosed.
              </p>
            </div>
            <p>
              Refurbished products offer excellent value while maintaining quality and reliability. They come with a warranty for your peace of mind.
            </p>
          </div>
        ),
        icon: <Package className="h-5 w-5" />,
        keywords: ["refurbished", "used", "second hand", "reconditioned", "graded"],
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery & Collection",
    items: [
      {
        id: "delivery-1",
        question: "What are your delivery options?",
        answer: (
          <div className="space-y-4">
            <p>
              We offer flexible delivery options to suit your needs:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Standard Delivery:</strong> Available across Belfast and surrounding areas with scheduled time slots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Express Delivery:</strong> Next-day delivery available for in-stock items ordered before 2pm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Collection:</strong> Free collection from our store during business hours</span>
              </li>
            </ul>
            <p>
              Delivery charges vary based on your location and the size of your order. Large appliances include installation where applicable.
            </p>
          </div>
        ),
        icon: <Truck className="h-5 w-5" />,
        keywords: ["delivery", "shipping", "collection", "pickup", "belfast"],
      },
      {
        id: "delivery-2",
        question: "Do you deliver outside Belfast?",
        answer: (
          <div className="space-y-4">
            <p>
              Absolutely. While Belfast is our primary service area, we provide delivery across <strong className="text-foreground">Northern Ireland</strong> and can arrange shipping to the <strong className="text-foreground">Republic of Ireland</strong> and <strong className="text-foreground">mainland UK</strong>.
            </p>
            <p>
              Delivery costs and timeframes vary by location. Please contact us for a quote if you're outside our standard delivery zones.
            </p>
          </div>
        ),
        icon: <Globe className="h-5 w-5" />,
        keywords: ["outside", "northern ireland", "uk", "ireland", "mainland", "shipping"],
      },
      {
        id: "delivery-3",
        question: "How long does delivery take?",
        answer: (
          <div className="space-y-4">
            <p>
              Delivery timeframes depend on your location and product availability:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Belfast & Local Areas:</strong> 1-3 working days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Greater Northern Ireland:</strong> 3-5 working days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Republic of Ireland & UK:</strong> 5-7 working days</span>
              </li>
            </ul>
            <p>
              You'll receive tracking information once your order is dispatched, and we'll contact you to arrange a convenient delivery slot.
            </p>
          </div>
        ),
        icon: <Clock className="h-5 w-5" />,
        keywords: ["time", "timeframe", "long", "days", "when", "how long"],
      },
      {
        id: "delivery-4",
        question: "What if my delivery is delayed?",
        answer: (
          <div className="space-y-4">
            <p>
              While we strive to meet all delivery commitments, occasional delays can occur due to high demand, supply chain issues, or unforeseen circumstances.
            </p>
            <p>
              If your delivery is delayed:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>We'll contact you proactively to explain the situation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You can track your order status online or by contacting our team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>We'll work with you to reschedule at your earliest convenience</span>
              </li>
            </ul>
          </div>
        ),
        icon: <Timer className="h-5 w-5" />,
        keywords: ["delayed", "late", "not arrived", "waiting", "delay"],
      },
    ],
  },
  {
    id: "issues",
    title: "Issues & Returns",
    items: [
      {
        id: "issues-1",
        question: "What if my item arrives damaged or faulty?",
        answer: (
          <div className="space-y-4">
            <p>
              We take great care in packaging and delivering your items. However, if you receive a damaged or faulty product, please:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Contact us within 48 hours</strong> of receiving your order</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Take photographs</strong> of the damage or fault</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Keep all packaging</strong> until the issue is resolved</span>
              </li>
            </ul>
            <p>
              We'll arrange a replacement, repair, or full refund depending on the situation and your preference.
            </p>
          </div>
        ),
        icon: <AlertTriangle className="h-5 w-5" />,
        keywords: ["damaged", "faulty", "broken", "defective", "not working"],
      },
      {
        id: "issues-2",
        question: "What is your returns policy?",
        answer: (
          <div className="space-y-4">
            <p>
              We offer a <strong className="text-foreground">14-day returns policy</strong> on most products, starting from the day you receive your order.
            </p>
            <p>
              To be eligible for a return:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>The item must be unused and in its original condition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Original packaging must be intact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You must have proof of purchase</span>
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-secondary border border-border-light">
              <p className="text-sm">
                <strong className="text-foreground">Please note:</strong> Return shipping costs may apply for change-of-mind returns. Faulty items are collected free of charge.
              </p>
            </div>
          </div>
        ),
        icon: <RotateCcw className="h-5 w-5" />,
        keywords: ["returns", "return", "refund", "send back", "policy"],
      },
      {
        id: "issues-3",
        question: "How do I get a refund?",
        answer: (
          <div className="space-y-4">
            <p>
              Once your return is received and inspected, we'll process your refund within <strong className="text-foreground">5-7 working days</strong>.
            </p>
            <p>
              Refunds are issued to the original payment method:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Card payments:</strong> Credited back to your card (may take 3-5 additional days to appear)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Bank transfers:</strong> Returned to your bank account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Cash payments:</strong> Refunded via bank transfer or store credit</span>
              </li>
            </ul>
          </div>
        ),
        icon: <RotateCcw className="h-5 w-5" />,
        keywords: ["refund", "money back", "reimbursement"],
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranties",
    items: [
      {
        id: "warranty-1",
        question: "What warranties do you offer?",
        answer: (
          <div className="space-y-4">
            <p>
              All products sold by NI Drip Central come with warranty coverage:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">New Products:</strong> Standard manufacturer's warranty (typically 1-2 years depending on product)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Refurbished Products:</strong> Minimum 6-month warranty on all refurbished items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Extended Warranties:</strong> Available for purchase on selected products</span>
              </li>
            </ul>
            <p>
              Warranty details are provided with your purchase documentation. Please retain your receipt as proof of purchase.
            </p>
          </div>
        ),
        icon: <Shield className="h-5 w-5" />,
        keywords: ["warranty", "guarantee", "protection", "coverage"],
      },
    ],
  },
  {
    id: "payment",
    title: "Payment",
    items: [
      {
        id: "payment-1",
        question: "What payment methods do you accept?",
        answer: (
          <div className="space-y-4">
            <p>
              We accept a variety of payment methods for your convenience:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Credit & Debit Cards:</strong> Visa, Mastercard, American Express</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Bank Transfer:</strong> Available for larger purchases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Cash:</strong> Accepted for in-store purchases and collection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Finance Options:</strong> Interest-free and low-rate finance available on qualifying orders</span>
              </li>
            </ul>
            <p>
              All online payments are processed securely through our encrypted payment gateway.
            </p>
          </div>
        ),
        icon: <CreditCard className="h-5 w-5" />,
        keywords: ["payment", "pay", "card", "credit", "debit", "cash", "finance"],
      },
    ],
  },
  {
    id: "support",
    title: "Customer Support",
    items: [
      {
        id: "support-1",
        question: "How can I contact customer support?",
        answer: (
          <div className="space-y-4">
            <p>
              Our friendly customer support team is here to help:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Phone:</strong> Call us during business hours for immediate assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Email:</strong> Send us a message and we'll respond within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">In-Store:</strong> Visit us in Belfast for face-to-face support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong className="text-foreground">Social Media:</strong> Reach out via our social channels</span>
              </li>
            </ul>
            <p>
              We aim to resolve all queries as quickly as possible and provide the best possible service.
            </p>
          </div>
        ),
        icon: <Headphones className="h-5 w-5" />,
        keywords: ["contact", "support", "help", "phone", "email", "reach"],
      },
    ],
  },
];

export function getAllFAQItems(): FAQItemData[] {
  return faqCategories.flatMap((category) => category.items);
}

export function searchFAQs(query: string): FAQItemData[] {
  if (!query.trim()) return getAllFAQItems();

  const lowerQuery = query.toLowerCase();
  return getAllFAQItems().filter(
    (item) =>
      item.question.toLowerCase().includes(lowerQuery) ||
      item.keywords.some((keyword) => keyword.includes(lowerQuery))
  );
}
