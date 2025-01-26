"use client";
import { Icon, IconifyIcon } from "@iconify/react";
import chevrons from "@iconify/icons-tabler/chevron-down";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import Text from "../Text";
import Link from "next/link";

interface Item {
  title: string;
  url: string;
  icon?: any;
  isActive?: boolean;
  items?: Item[];
}

interface NavMainProps {
  locale: string;
  items?: Item[];
}

export function NavMain({ locale, items = [] }: NavMainProps) {
  const t = useTranslations("app");
  const { state } = useSidebar();

  return (
    <SidebarGroup>
      {state !== "collapsed" && (
        <>
          <Text variant="h1" className="text-sm" locale={locale} cairoFont>
            {t("name")}
          </Text>
          <Text
            variant="h2"
            locale={locale}
            className="text-xs text-muted-foreground mt-2"
            cairoFont
          >
            {t("slogan")}
          </Text>
        </>
      )}

      <SidebarMenu>
        {items.map((item, index) => (
          <Collapsible
            key={item.title + index}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && (
                    <Icon icon={item.icon} width="24" height="24" />
                  )}
                  <Text
                    variant="span"
                    className="text-sm"
                    locale={locale}
                    cairoFont
                  >
                    {item.title}
                  </Text>
                  <Icon icon={chevrons} width="24" height="24" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    console.log(subItem);
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            {subItem.icon && (
                              <Icon
                                icon={subItem.icon}
                                width="24"
                                height="24"
                              />
                            )}
                            <Text
                              variant="span"
                              className="text-sm"
                              locale={locale}
                              cairoFont
                            >
                              {subItem.title}
                            </Text>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
