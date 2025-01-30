"use client";
import serviceIconQueen from "@iconify/icons-tabler/chess-queen";
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
import { serviceIcon } from "../../constant/icons";
import { NavOther } from "./nav-other";

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
        {/* <NavMain items={data.navMain} locale={locale} /> */}
        <NavMain locale={locale} />
        <NavOther locale={locale} />

        <Plugin locale={locale} />
        <NavContactUs locale={locale} />
      </SidebarContent>
      <SidebarFooter>
        <Dm user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
