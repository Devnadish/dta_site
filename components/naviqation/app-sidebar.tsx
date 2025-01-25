"use client";

import * as React from "react";

import whatsappIcon from "@iconify/icons-tabler/brand-whatsapp";
import emailIcon from "@iconify/icons-tabler/mail";
import phoneIcon from "@iconify/icons-tabler/phone";
import formIcon from "@iconify/icons-tabler/forms";
import dollarIcon from "@iconify/icons-tabler/currency-dollar";
import powershell from "@iconify/icons-tabler/brand-powershell";
import serviceIcon from "@iconify/icons-tabler/chess-queen";
import worksampleIcon from "@iconify/icons-tabler/grid-dots";

import { NavMain } from "@/components/naviqation/nav-main";
import { NavContactUs } from "@/components/naviqation/nav-contactus";
import { Dm } from "@/components/naviqation/nav-Dm";
import { ProjectSwitcher } from "@/components/naviqation/ProjectSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import { Plugin } from "./Plugin";

// This is sample data.

export function AppSidebar({
  locale,
  ...props
}: React.ComponentProps<typeof Sidebar> & { locale: string }) {
  const t = useTranslations("navigation");
  const data = {
    user: {
      name: "Social Media",
      email: "Devnadish@gmail.com",
      avatar: "/assets/logo.webp",
    },
    projectsLink: [
      {
        name: "Crombo",
        logo: "/assets/crombo.png",
        plan: "Enterprise",
        link: "https://www.google.com",
      },
      {
        name: "DoctorCar",
        logo: "/assets/testProject.webp",
        plan: "Enterprise",
        link: "https://www.yahoo.com",
      },
    ],
    navMain: [
      {
        title: t("services.title"),
        url: "#",
        icon: serviceIcon,
        isActive: true,
        items: [
          {
            title: t("services.subMenu.webApp"),
            url: "#",
          },
          {
            title: t("services.subMenu.mobileApp"),
            url: "#",
          },
          {
            title: t("services.subMenu.ecommerce"),
            url: "#",
          },
          {
            title: t("services.subMenu.uiUx"),
            url: "#",
          },
          {
            title: t("services.subMenu.visualIdentity"),
            url: "#",
          },
          {
            title: t("services.subMenu.digitalMarketing"),
            url: "#",
          },
        ],
      },
      {
        title: t("technologies.title"),
        url: "#",
        icon: powershell,
        items: [
          {
            title: t("technologies.subMenu.nextjs.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.nodejs.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.react.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.reactNative.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.mongoDB.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.firebase.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.aws.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.prisma.title"),
            url: "#",
          },
          {
            title: t("technologies.subMenu.sanity.title"),
            url: "#",
          },
        ],
      },
      {
        title: t("workSamples.title"),
        url: "#",
        icon: worksampleIcon,
        items: [
          {
            title: t("workSamples.subMenu.webApp"),
            url: "#",
          },
          {
            title: t("workSamples.subMenu.mobileApp"),
            url: "#",
          },
          {
            title: t("workSamples.subMenu.uiUx"),
            url: "#",
          },
          {
            title: t("workSamples.subMenu.visualIdentity"),
            url: "#",
          },
          {
            title: t("workSamples.subMenu.digitalMarketing"),
            url: "#",
          },
          {
            title: t("workSamples.subMenu.more"),
            url: "#",
          },
        ],
      },
      {
        title: t("prices.title"),
        url: "#",
        icon: dollarIcon,
        items: [
          {
            title: t("prices.basic"),
            url: "#",
          },
          {
            title: t("prices.pro"),
            url: "#",
          },
          {
            title: t("prices.enterprise"),
            url: "#",
          },
          {
            title: t("prices.custom"),
            url: "#",
          },
        ],
      },
    ],
    contacts: [
      {
        name: t("contactus.whatsapp"),
        url: "#",
        icon: whatsappIcon,
      },
      {
        name: t("contactus.email"),
        url: "#",
        icon: emailIcon,
      },
      {
        name: t("contactus.phone"),
        url: "#",
        icon: phoneIcon,
      },
      {
        name: t("contactus.form"),
        url: "#",
        icon: formIcon,
      },
    ],
  };
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      side={locale === "ar" ? "right" : "left"}
    >
      <SidebarHeader>
        <ProjectSwitcher projectsLink={data.projectsLink} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} locale={locale} />
        <Plugin locale={locale} />
        <NavContactUs contacts={data.contacts} locale={locale} />
      </SidebarContent>
      <SidebarFooter>
        <Dm user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
