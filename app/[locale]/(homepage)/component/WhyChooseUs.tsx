import React from "react";
import { DollarSign, Clock, Users, Calendar, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

// Define the type for the feature items
type Feature = {
  icon: React.ReactNode; // Use React.ReactNode for Lucide icons
  title: string;
  description: string;
};

// List of features with Lucide icons
const features: Feature[] = [
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "costEfficiencyTitle",
    description: "costEfficiencyDescription",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "onDemandTitle",
    description: "onDemandDescription",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "itExpertsTitle",
    description: "itExpertsDescription",
  },
  {
    icon: <Calendar className="w-12 h-12 text-primary" />,
    title: "timeFlexibilityTitle",
    description: "timeFlexibilityDescription",
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "securePrivacyTitle",
    description: "securePrivacyDescription",
  },
];

const WhyChooseUs: React.FC = () => {
  const t = useTranslations("whyChooseUs");
  return (
    <section id="whyChooseUs" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">
            {t("whyChooseUs")}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("whatMakesUsDifferent")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t(feature.title)}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
