"use client";
import powershell from "@iconify/icons-tabler/brand-powershell";
import serviceIconQueen from "@iconify/icons-tabler/chess-queen";
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
import {
  contactUs,
  serviceIcon,
  technology,
  whyChooseUs,
} from "../../constant/technologyIcons";

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
        icon: serviceIconQueen,
        isActive: true,
        items: [
          {
            title: t("services.subMenu.webApp"),
            url: "#",
            icon: serviceIcon.website.icon,
          },
          {
            title: t("services.subMenu.mobileApp"),
            url: "#",
            icon: serviceIcon.mobileApp.icon,
          },
          {
            title: t("services.subMenu.ecommerce"),
            url: "#",
            icon: serviceIcon.ecomm.icon,
          },
          {
            title: t("services.subMenu.uiUx"),
            url: "#",
            icon: serviceIcon.uiux.icon,
          },
          {
            title: t("services.subMenu.visualIdentity"),
            url: "#",
            icon: serviceIcon.vd.icon,
          },
          {
            title: t("services.subMenu.digitalMarketing"),
            url: "#",
            icon: serviceIcon.dm.icon,
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
            icon: technology.nextjs.icon,
          },
          {
            title: t("technologies.subMenu.nodejs.title"),
            url: "#",
            icon: technology.nodeJs.icon,
          },
          {
            title: t("technologies.subMenu.react.title"),
            url: "#",
            icon: technology.react.icon,
          },
          {
            title: t("technologies.subMenu.reactNative.title"),
            url: "#",
            icon: technology.reactNative.icon,
          },
          {
            title: t("technologies.subMenu.mongoDB.title"),
            url: "#",
            icon: technology.mongodb.icon,
          },
          {
            title: t("technologies.subMenu.firebase.title"),
            url: "#",
            icon: technology.firebase.icon,
          },

          {
            title: t("technologies.subMenu.prisma.title"),
            url: "#",
            icon: technology.prisma.icon,
          },
          {
            title: t("technologies.subMenu.sanity.title"),
            url: "#",
            icon: technology.sentry.icon,
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
            icon: serviceIcon.website,
          },
          {
            title: t("workSamples.subMenu.mobileApp"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("workSamples.subMenu.uiUx"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("workSamples.subMenu.visualIdentity"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("workSamples.subMenu.digitalMarketing"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("workSamples.subMenu.more"),
            url: "#",
            icon: serviceIcon.website,
          },
        ],
      },
      {
        title: t("prices.title"),
        url: "#",
        icon: whyChooseUs.dollar,
        items: [
          {
            title: t("prices.basic"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("prices.pro"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("prices.enterprise"),
            url: "#",
            icon: serviceIcon.website,
          },
          {
            title: t("prices.custom"),
            url: "#",
            icon: serviceIcon.website,
          },
        ],
      },
    ],
    contacts: [
      {
        name: t("contactus.whatsapp"),
        url: "#",
        icon: contactUs.whatsapp.icon,
      },
      {
        name: t("contactus.email"),
        url: "#",
        icon: contactUs.email.icon,
      },
      {
        name: t("contactus.phone"),
        url: "#",
        icon: contactUs.phone.icon,
      },
      {
        name: t("contactus.form"),
        url: "#",
        icon: contactUs.form.icon,
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
