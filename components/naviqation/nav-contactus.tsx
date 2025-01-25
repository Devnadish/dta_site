"use client";

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { Icon, IconifyIcon } from "@iconify/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import Text from "../Text";

export function NavContactUs({
  contacts,
  locale,
}: {
  locale: string;
  contacts: {
    name: string;
    url: string;
    icon: IconifyIcon;
  }[];
}) {
  const { isMobile } = useSidebar();
  const t = useTranslations("navigation");

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <Text variant="span" locale={locale}>
        {t("contactus.title")}
      </Text>
      <SidebarMenu>
        {contacts.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <Icon icon={item.icon} width="24" height="24" />
                <Text variant="span" locale={locale}>
                  {item.name}
                </Text>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
