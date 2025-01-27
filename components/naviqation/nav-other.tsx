import { Icon, IconifyIcon } from "@iconify/react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import Text from "../Text";
import { technology } from "../../constant/icons";
import Link from "next/link";

export function NavOther({ locale }: { locale: string }) {
  const t = useTranslations("navigation");
  const data = [
    {
      name: t("otherMenu.usedTecno"),
      url: `/${locale}/technologyshowcase`,
      icon: technology.vscode.icon,
    },

    {
      name: t("otherMenu.wodkSample"),
      url: `/${locale}/worksample`,
      icon: technology.workSample.icon,
    },

    {
      name: t("otherMenu.price"),
      url: `/${locale}/packages`,
      icon: technology.priceDown.icon,
    },
  ];
  const title = {
    title: t("otherMenu.title"),
    icon: technology.linkYouLike.icon,
  };

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <div className="flex items-center mb-2 ">
        <Icon icon={title.icon} width="24" height="24" />
        <Text variant="span" locale={locale} cairoFont>
          {title.title}
        </Text>
      </div>
      <SidebarMenu>
        {data.map((item) => (
          <SidebarMenuItem key={item.name} className="mr-4">
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <Icon icon={item.icon} width="24" height="24" />
                <Text variant="span" locale={locale} cairoFont>
                  {item.name}
                </Text>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
