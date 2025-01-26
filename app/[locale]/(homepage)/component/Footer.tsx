import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Text from "../../../../components/Text";
import Image from "next/image";

const Footer: React.FC = async () => {
  const t = await getTranslations("footer");
  const locale = await getLocale();

  const phoneNumber = "+966502699023";
  const emailAddress = "info@dreamto.app";

  return (
    <div className="bg-gray-900 text-white py-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Text and CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <Text
              variant="h3"
              locale={locale}
              className="text-4xl md:text-2xl font-bold mb-4"
            >
              {t("readyToTransform")}
            </Text>
            <Text
              variant="p"
              locale={locale}
              className="text-lg text-gray-300 mb-8 text-center"
            >
              {t("buildSomethingGreat")}
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${emailAddress}`}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <Text
                  variant="p"
                  locale={locale}
                  className="text-lg  text-center"
                >
                  {t("getInTouch")}
                </Text>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="border border-white text-white px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <Text
                  variant="p"
                  locale={locale}
                  className="text-lg  text-center"
                >
                  {t("callUsNow")}
                </Text>
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="https://d2yq1wt6p3tg8m.cloudfront.net/assets/images/new-landing/footer-g.png"
              alt={t("footerIllustrationAlt")}
              className="w-full max-w-sm lg:max-w-md animate-float"
              width="380"
              height="364"
            />
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-6 h-6 text-primary" />
            <a
              href={`mailto:${emailAddress}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("chatWithUs")}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <a
              href={`tel:${phoneNumber}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <a
              href={`mailto:${emailAddress}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {emailAddress}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
