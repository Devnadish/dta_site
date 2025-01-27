import React from "react";
import { IconifyIcon } from "@iconify/react/dist/iconify.js";
import { Icon as Iconify } from "@iconify/react";
import { getLocale, getTranslations } from "next-intl/server";
import { whyChooseUs } from "@/constant/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // ShadCN Card
import { Badge } from "@/components/ui/badge"; // ShadCN Badge
import MotionDiv from "@/components/MotionDiv";
import Text from "@/components/Text";

// Define the type for the feature items
type Feature = {
  icon: IconifyIcon;
  title: string;
  description: string;
};

// List of features
const features: Feature[] = [
  {
    icon: whyChooseUs.dollar,
    title: "costEfficiencyTitle",
    description: "costEfficiencyDescription",
  },
  {
    icon: whyChooseUs.ecustom,
    title: "onDemandTitle",
    description: "onDemandDescription",
  },
  {
    icon: whyChooseUs.expert,
    title: "itExpertsTitle",
    description: "itExpertsDescription",
  },
  {
    icon: whyChooseUs.timeFlex,
    title: "timeFlexibilityTitle",
    description: "timeFlexibilityDescription",
  },
  {
    icon: whyChooseUs.shield,
    title: "securePrivacyTitle",
    description: "securePrivacyDescription",
  },
];

const WhyChooseUs: React.FC = async () => {
  const t = await getTranslations("whyChooseUs");
  const locale = await getLocale();

  return (
    <section id="whyChooseUs" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Text
            variant="h2"
            locale={locale}
            className="text-4xl font-bold mb-4"
          >
            {t("whyChooseUs")}
          </Text>
          <Text
            variant="h4"
            locale={locale}
            className="text-lg text-muted-foreground"
          >
            {t("whatMakesUsDifferent")}
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MotionDiv
              whileHoverEffect={{ scale: 1.05 }}
              whileTapEffect={{ scale: 0.98 }}
              key={index}
            >
              <Card className="h-full rounded-2xl shadow-md transition-transform hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Iconify
                      icon={feature.icon}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {t(feature.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {t(feature.description)}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
