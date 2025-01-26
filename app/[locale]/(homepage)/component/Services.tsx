import React from "react";
// Import Lucide Icons
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // shadcn Card
import { Badge } from "@/components/ui/badge"; // shadcn Badge
import { buttonVariants } from "@/components/ui/button"; // shadcn Button
import MotionDiv from "@/components/MotionDiv";
import { serviceIcon, technology } from "@/constant/technologyIcons";
import { Icon as Iconify, IconifyIcon } from "@iconify/react";
import Text from "@/components/Text";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define the card data type
type CardData = {
  title: string;
  description: string;
  locale?: string;
  t?: any;
  icon: IconifyIcon; // Lucide icon component
  tags: { text: string; icon: IconifyIcon }[]; // Tags with Lucide icons
};

// Card data
const cardData: CardData[] = [
  {
    title: "websiteDevelopmentTitle",
    description: "websiteDevelopmentDescription",
    icon: serviceIcon.website.icon,
    tags: [
      { text: technology.js.name, icon: technology.js.icon },
      { text: technology.html.name, icon: technology.html.icon },
      { text: technology.css.name, icon: technology.css.icon },
      { text: technology.react.name, icon: technology.react.icon },
      { text: technology.nextjs.name, icon: technology.nextjs.icon },
      { text: technology.xd.name, icon: technology.xd.icon },
    ],
  },
  {
    title: "mobileAppDevelopmentTitle",
    description: "mobileAppDevelopmentDescription",
    icon: serviceIcon.mobileApp.icon,
    tags: [
      { text: technology.react.name, icon: technology.react.icon },
      { text: technology.reactNative.name, icon: technology.reactNative.icon },
      { text: technology.mongodb.name, icon: technology.mongodb.icon },
      { text: technology.firebase.name, icon: technology.firebase.icon },
      { text: technology.sqlite.name, icon: technology.sqlite.icon },
      { text: technology.mysql.name, icon: technology.mysql.icon },
      { text: technology.figma.name, icon: technology.figma.icon },
      { text: technology.prisma.name, icon: technology.prisma.icon },
    ],
  },
  {
    title: "crmDevelopmentTitle",
    description: "crmDevelopmentDescription",
    icon: serviceIcon.crm.icon,
    tags: [
      { text: technology.react.name, icon: technology.react.icon },
      { text: technology.nextjs.name, icon: technology.nextjs.icon },
      { text: technology.sentry.name, icon: technology.sentry.icon },
      { text: technology.figma.name, icon: technology.figma.icon },
      { text: technology.mongodb.name, icon: technology.mongodb.icon },
      { text: technology.prisma.name, icon: technology.prisma.icon },
    ],
  },
  {
    title: "ecommerceDevelopmentTitle",
    description: "ecommerceDevelopmentDescription",
    icon: serviceIcon.ecomm.icon,
    tags: [
      { text: technology.react.name, icon: technology.react.icon },
      { text: technology.nextjs.name, icon: technology.nextjs.icon },
      { text: technology.figma.name, icon: technology.figma.icon },
      { text: technology.mongodb.name, icon: technology.mongodb.icon },
      { text: technology.prisma.name, icon: technology.prisma.icon },
      { text: technology.mysql.name, icon: technology.mysql.icon },
      { text: technology.nodeJs.name, icon: technology.nodeJs.icon },
      { text: technology.shopify.name, icon: technology.shopify.icon },
      { text: technology.twilio.name, icon: technology.twilio.icon },
      { text: technology.firebase.name, icon: technology.firebase.icon },
    ],
  },
  {
    title: "uiUxDesignTitle",
    description: "uiUxDesignDescription",
    icon: serviceIcon.uiux.icon,
    tags: [
      { text: technology.figma.name, icon: technology.figma.icon },
      { text: technology.xd.name, icon: technology.xd.icon },
      { text: technology.photoshop.name, icon: technology.photoshop.icon },
      { text: technology.illustrator.name, icon: technology.illustrator.icon },
    ],
  },
  {
    title: "digitalMarketingTitle",
    description: "digitalMarketingDescription",
    icon: serviceIcon.dm.icon,
    tags: [
      { text: technology.photoshop.name, icon: technology.photoshop.icon },
      { text: technology.illustrator.name, icon: technology.illustrator.icon },
      { text: technology.buffer.name, icon: technology.buffer.icon },
      { text: technology.tiktok.name, icon: technology.tiktok.icon },
      { text: technology.tiktok.name, icon: technology.tiktok.icon },
      { text: technology.snapchat.name, icon: technology.snapchat.icon },
      { text: technology.youtube.name, icon: technology.youtube.icon },
      { text: technology.instgram.name, icon: technology.instgram.icon },
      { text: technology.twitter.name, icon: technology.twitter.icon },
    ],
  },
  {
    title: "visualIdentityTitle",
    description: "visualIdentityDescription",
    icon: serviceIcon.vd.icon,
    tags: [
      { text: technology.photoshop.name, icon: technology.photoshop.icon },
      { text: technology.illustrator.name, icon: technology.illustrator.icon },
    ],
  },
];

const Services = async () => {
  const t = await getTranslations("services");
  const locale = await getLocale();
  return (
    <div className="min-h-screen bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Text
            variant="h2"
            locale={locale}
            className="text-4xl font-bold text-primary"
          >
            <span className="text-primary">{t("buildingTomorrow")}</span>{" "}
            <span className="text-orange-500">{t("solutions")}</span>{" "}
            <span className="text-primary">{t("today")}</span>
          </Text>
          <Text
            variant="h2"
            locale={locale}
            className="mt-4 text-lg text-gray-600"
          >
            {t("blendingCreativity")}
          </Text>
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
  icon,
  tags,
  t,
  locale,
}: CardData) => {
  return (
    <MotionDiv
      whileHoverEffect={{ scale: 0.9, rotate: 5 }}
      whileTapEffect={{ scale: 0.9, rotate: -5 }}
    >
      <Card className="h-full flex flex-col min-w-[300px]">
        <CardHeader className="flex flex-col items-center text-center">
          <CardTitle className="flex flex-col items-center gap-2 text-xl font-bold ">
            <Iconify icon={icon} className="w-12 h-12" />
            <Text
              variant="h3"
              locale={locale}
              className="text-balance font-cairo"
              cairoFont
            >
              {t(title)}
            </Text>
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground">
            <Text variant="p" locale={locale} className="text-balance">
              {t(description)}
            </Text>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-end">
          <Text
            variant="span"
            locale={locale}
            className="text-center mb-2 text-primary/80 font-semibold"
          >
            {t("tecnoUsed")}
          </Text>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Iconify icon={tag.icon} className="w-4 h-4" />
                {/* <span className="capitalize">{tag.text}</span> */}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex  items-center justify-center flex-col  w-full ">
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Text
              variant="h2"
              locale={locale}
              className="text-lg font-cairo"
              cairoFont
            >
              {t("getQuote")}
            </Text>
          </Link>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
};

export default Services;
