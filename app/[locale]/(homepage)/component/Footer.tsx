"use client";
import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  return (
    <div className="bg-gray-900 text-white py-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Text and CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl font-bold mb-4">{t("readyToTransform")}</h3>
            <p className="text-lg text-gray-300 mb-8">
              {t("buildSomethingGreat")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t("getInTouch")}
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t("callUsNow")}
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
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
            <p className="text-gray-300">{t("chatWithUs")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <p className="text-gray-300">{t("phoneNumber")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <p className="text-gray-300">{t("emailAddress")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
