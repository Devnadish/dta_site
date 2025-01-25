"use client";
import React from "react";
import { motion } from "framer-motion"; // For animations
import {
  Code,
  Smartphone,
  Rocket,
  Settings,
  TestTube2,
  Users,
  BarChart2,
  MessageSquareText,
  Brain,
  Mic,
  FlaskConical,
  ShoppingCart,
  Package,
  FileCode,
  Cpu,
  Terminal,
  Server,
  Cloud,
  Database,
  GitBranch,
  GitPullRequest,
  LayoutTemplate,
  PenTool,
  Megaphone,
  TrendingUp,
  Palette,
  Brush,
} from "lucide-react"; // Import Lucide Icons
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // shadcn Card
import { Badge } from "@/components/ui/badge"; // shadcn Badge
import { Button } from "@/components/ui/button"; // shadcn Button
import { useTranslations } from "next-intl";

// Define the card data type
type CardData = {
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
  tags: { text: string; icon: React.ElementType }[]; // Tags with Lucide icons
};

// Card data
const cardData: CardData[] = [
  {
    title: "websiteDevelopmentTitle",
    description: "websiteDevelopmentDescription",
    icon: Code,
    tags: [
      { text: "JavaScript", icon: FileCode },
      { text: "React.js", icon: Cpu },
      { text: "Node.js", icon: Terminal },
      { text: "PHP", icon: Server },
    ],
  },
  {
    title: "mobileAppDevelopmentTitle",
    description: "mobileAppDevelopmentDescription",
    icon: Smartphone,
    tags: [
      { text: "React Native", icon: Cpu },
      { text: "Swift", icon: Code },
      { text: "Kotlin", icon: Code },
      { text: "Flutter", icon: GitBranch },
    ],
  },
  {
    title: "crmDevelopmentTitle",
    description: "crmDevelopmentDescription",
    icon: Users,
    tags: [
      { text: "Salesforce", icon: Cloud },
      { text: "Microsoft Dynamics 365", icon: Database },
      { text: "Zoho CRM", icon: Database },
      { text: "PHP/MySQL with Laravel", icon: Server },
    ],
  },
  {
    title: "ecommerceDevelopmentTitle",
    description: "ecommerceDevelopmentDescription",
    icon: Rocket,
    tags: [
      { text: "Shopify", icon: ShoppingCart },
      { text: "Magento", icon: Package },
      { text: "WooCommerce", icon: ShoppingCart },
      { text: "React.js", icon: Cpu },
    ],
  },
  {
    title: "uiUxDesignTitle",
    description: "uiUxDesignDescription",
    icon: LayoutTemplate,
    tags: [
      { text: "Wireframing", icon: PenTool },
      { text: "Prototyping", icon: LayoutTemplate },
      { text: "User Research", icon: Users },
      { text: "Interaction Design", icon: Cpu },
    ],
  },
  {
    title: "digitalMarketingTitle",
    description: "digitalMarketingDescription",
    icon: Megaphone,
    tags: [
      { text: "SEO", icon: TrendingUp },
      { text: "Social Media", icon: Megaphone },
      { text: "PPC", icon: BarChart2 },
      { text: "Content Marketing", icon: PenTool },
    ],
  },
  {
    title: "visualIdentityTitle",
    description: "visualIdentityDescription",
    icon: Palette,
    tags: [
      { text: "Logo Design", icon: Brush },
      { text: "Brand Guidelines", icon: PenTool },
      { text: "Typography", icon: FileCode },
      { text: "Color Theory", icon: Palette },
    ],
  },
];

const Services = () => {
  const t = useTranslations("services");
  return (
    <div className="min-h-screen bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-white">{t("buildingTomorrow")}</span>{" "}
            <span className="text-orange-500">{t("solutions")}</span>{" "}
            <span className="text-white">{t("today")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("blendingCreativity")}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <CardComponent key={index} {...card} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Card Component
const CardComponent = ({
  title,
  description,
  icon: Icon,
  tags,
  t,
}: CardData & { t: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }} // Hover animation
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col min-w-[300px]">
        <CardHeader className="flex flex-col items-center text-center">
          <Icon className="w-12 h-12 text-blue-600 mb-4" />
          <CardTitle className="text-xl font-bold">{t(title)}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            {t(description)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2"
              >
                <tag.icon className="w-4 h-4" />
                {tag.text}
              </Badge>
            ))}
          </div>
          <Button className="mt-4 w-full">{t("getQuote")}</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Services;
