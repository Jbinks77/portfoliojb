import type { LucideIcon } from "lucide-react";
import { Gauge, Rocket, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Mes créations", href: "/mes-creations" },
  { label: "Contact", href: "/contact" },
];

export const services: {
  title: string;
  details: string;
  price: string;
  icon: LucideIcon;
}[] = [
  { title: "Site vitrine premium", details: "Design sur-mesure, SEO, performance, animations", price: "à partir de 1200€", icon: Sparkles },
  { title: "Landing page conversion", details: "Copy + UI + A/B ready", price: "à partir de 700€", icon: Rocket },
  { title: "E-commerce", details: "Stripe/Shopify/Headless selon besoin", price: "à partir de 2500€", icon: WandSparkles },
  { title: "Refactoring / optimisation", details: "Core Web Vitals, accessibilité, clean code", price: "à partir de 500€", icon: Gauge },
  { title: "Maintenance", details: "Mises à jour, sécurité, contenu", price: "à partir de 49€/mois", icon: ShieldCheck },
];

export const metrics = [
  { label: "Hausse conversion", value: "+30%" },
  { label: "Score Lighthouse", value: "90+" },
  { label: "Temps chargement", value: "< 1.8s" },
  { label: "Taux rebond", value: "-22%" },
];

export const processSteps = ["Découverte", "Design", "Dév", "Livraison"];

export const testimonials = [
  { name: "Camille D.", role: "Fondatrice marque beauté", quote: "Un site élégant, rapide et pensé pour convertir. Nos demandes ont bondi dès la première semaine." },
  { name: "Milo R.", role: "Consultant B2B", quote: "Le niveau de finition est impressionnant. L'expérience respire le premium sans sacrifier les performances." },
  { name: "Sofia L.", role: "E-commerçante", quote: "Design + tunnel de conversion ultra propre. Un vrai investissement rentable." },
];

export const faqs = [
  { question: "Combien de temps pour un site vitrine ?", answer: "En moyenne 2 à 4 semaines selon le périmètre, la complexité visuelle et les contenus." },
  { question: "Proposes-tu la rédaction du contenu ?", answer: "Oui, en option avec approche orientée conversion et SEO sémantique." },
  { question: "Le site est-il facile à maintenir ?", answer: "Oui. L'architecture est documentée et prête pour évoluer proprement." },
  { question: "Peut-on connecter des outils marketing ?", answer: "Absolument : analytics, CRM, pixels, email automation et A/B testing." },
];

export type ProjectType = "Vitrine" | "Landing" | "E-commerce";

export const projects = [
  {
    title: "Elieli – Site vitrine",
    type: "Vitrine" as ProjectType,
    description: "Site vitrine moderne avec animations et sections claires.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    tags: ["Animations", "SEO", "Performance"],
    link: "https://website-elieli2.vercel.app/",
    objective: "Présenter une activité de façon claire et premium avec un parcours de lecture fluide.",
    features: ["Sections narratives", "Micro-interactions", "Call-to-action optimisés"],
  },
  {
    title: "Asteria Legal",
    type: "Landing" as ProjectType,
    description: "Landing B2B orientée prise de rendez-vous pour cabinet juridique.",
    stack: ["Next.js", "shadcn/ui", "Analytics"],
    tags: ["Conversion", "A/B Ready"],
    link: "#",
    objective: "Réduire le coût d'acquisition et augmenter les demandes qualifiées.",
    features: ["Hero centré bénéfices", "Formulaire multi-étapes", "Tracking évènements"],
  },
  {
    title: "Nocta Atelier",
    type: "Vitrine" as ProjectType,
    description: "Site de marque luxe avec univers visuel immersif et storytelling.",
    stack: ["Next.js", "GSAP-like motion via Framer", "CMS"],
    tags: ["Storytelling", "Branding"],
    link: "#",
    objective: "Renforcer l'image premium et améliorer le temps passé sur site.",
    features: ["Transitions douces", "Galerie immersive", "Optimisation images"],
  },
  {
    title: "Volt Commerce",
    type: "E-commerce" as ProjectType,
    description: "Boutique moderne avec tunnel simplifié et performances soignées.",
    stack: ["Next.js", "Stripe", "Headless"],
    tags: ["E-commerce", "Checkout"],
    link: "#",
    objective: "Maximiser le panier moyen avec UX rapide et claire.",
    features: ["Panier optimisé", "Fiches produits premium", "Paiement sécurisé"],
  },
  {
    title: "Pulse SaaS",
    type: "Landing" as ProjectType,
    description: "Page de lancement SaaS avec bloc social proof et comparatifs.",
    stack: ["Next.js", "Recharts", "API mock"],
    tags: ["SaaS", "Lead Gen"],
    link: "#",
    objective: "Transformer le trafic froid en essais gratuits qualifiés.",
    features: ["Pricing dynamique", "Comparatif fonctionnalités", "FAQ intelligente"],
  },
];
