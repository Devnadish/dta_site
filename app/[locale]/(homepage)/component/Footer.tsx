"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import dreamtoapp from "@/public/assets/dta.svg";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "../../../../lib/utils";
import Text from "../../../../components/Text";
import { buttonVariants } from "../../../../components/ui/button";
import { Icon } from "@iconify/react";
import backgroundImg from "@/public/assets/homepage/footer.webp";
import { contactUs, technology } from "../../../../constant/icons";

// Define types for contact items
type ContactItem = {
  title: string;
  icon: any;
  link: string;
};

// Contact and Social Media Component
const ContactAndSocialMedia: React.FC = () => {
  const contact: ContactItem[] = [
    {
      title: "WhatsApp",
      icon: contactUs.whatsapp.icon, // Replace with your actual iconify icon
      link: "https://wa.me/",
    },
    {
      title: "Contact Form",
      icon: contactUs.form.icon, // Replace with your actual iconify icon
      link: "#contact-form",
    },
    {
      title: "Instagram",
      icon: technology.instgram.icon, // Replace with your actual iconify icon
      link: "https://instagram.com",
    },
    {
      title: "TikTok",
      icon: contactUs.tiktok.icon, // Replace with your actual iconify icon
      link: "https://tiktok.com",
    },
    {
      title: "YouTube",
      icon: technology.youtube.icon, // Replace with your actual iconify icon
      link: "https://youtube.com",
    },
    {
      title: "Snapchat",
      icon: technology.snapchat.icon, // Replace with your actual iconify icon
      link: "https://snapchat.com",
    },
  ];

  return (
    <div className="mt-6 flex justify-between gap-6 z-50  p-2 mb-4 rounded-lg">
      {contact.map((item, index) => (
        <div
          key={index}
          className="w-12 h-12  rounded-full flex items-center justify-center text-primary shadow-md"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Icon icon={item.icon} className="w-6 h-6 " />
          </a>
        </div>
      ))}
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("homepage");
  const locale = useLocale();

  const footer = useTranslations("footer");

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger animations as the footer enters and exits the viewport
  });

  // Transformations for zoom and opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]); // Zoom in as you scroll up
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in as you scroll up

  return (
    <div>
      <motion.footer
        ref={containerRef}
        className="relative text-white py-12 overflow-hidden rounded-xl shadow-lg"
        style={{
          scale, // Apply zoom effect
          opacity, // Apply fade effect
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-15"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center lg:text-left">
                <Text
                  variant="h3"
                  locale={locale}
                  className="text-3xl font-extrabold mb-4"
                  cairoFont
                >
                  {footer("readyToTransform")}
                </Text>
                <Text
                  variant="p"
                  locale={locale}
                  className="text-xl text-gray-100 mb-8 text-center"
                  cairoFont
                >
                  {footer("buildSomethingGreat")}
                </Text>
              </div>
              <div className="bg-white rounded-full w-[150px] h-[150px] flex items-center justify-center shadow-md">
                <Image
                  src={dreamtoapp}
                  alt="Dream To App"
                  width={140}
                  height={120}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <Text
              variant="h2"
              locale={locale}
              className="text-3xl font-bold text-purple-500 drop-shadow-md"
              cairoFont
            >
              {t("slogon")}
            </Text>
            <h2 className="text-3xl font-bold text-purple-500 drop-shadow-md"></h2>
            <div className="mt-6">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-gradient-to-r from-pink-500 to-blue-500 text-white transform transition shadow-2xl drop-shadow-2xl animate-pulse rounded-2xl "
                )}
              >
                <Text variant="h2" locale={locale} className="text-lg">
                  {t("fromIdeaButton")}
                </Text>
              </Link>
            </div>
          </div>

          {/* Contact and Social Media Section */}
        </div>
      </motion.footer>
      <ContactAndSocialMedia />
    </div>
  );
};

export default Footer;
