import { Icon, IconifyIcon } from "@iconify/react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
  const t = useTranslations("navigation");

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <Text variant="span" locale={locale} cairoFont>
        {t("contactus.title")}
      </Text>
      <SidebarMenu>
        {contacts.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <Icon icon={item.icon} width="24" height="24" />
                <Text variant="span" locale={locale} cairoFont>
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
