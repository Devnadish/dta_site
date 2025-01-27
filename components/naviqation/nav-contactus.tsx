import { Icon } from "@iconify/react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import Text from "../Text";
import { contactUs } from "../../constant/icons";

export function NavContactUs({ locale }: { locale: string }) {
  const t = useTranslations("navigation");
  const { state } = useSidebar();

  const data = [
    {
      name: t("contactus.whatsapp"),
      url: "https://wa.me/1234567890", // Replace with actual WhatsApp link
      icon: contactUs.whatsapp.icon,
    },
    {
      name: t("contactus.email"),
      url: "mailto:someone@example.com", // Replace with actual email address
      icon: contactUs.email.icon,
    },
    {
      name: t("contactus.phone"),
      url: "tel:+1234567890", // Replace with actual phone number
      icon: contactUs.phone.icon,
    },
    {
      name: t("contactus.form"),
      url: "https://example.com/contact-form", // Replace with actual form URL
      icon: contactUs.form.icon,
    },
  ];

  return (
    <SidebarGroup>
      <div className="flex items-center mb-2">
        {state === "expanded" && (
          <Text variant="span" locale={locale} cairoFont>
            {t("contactus.title")}
          </Text>
        )}
      </div>
      <SidebarMenu>
        {data.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url} className="flex items-center">
                <Icon icon={item.icon} width="24" height="24" />
                {state === "expanded" && (
                  <Text variant="span" locale={locale} cairoFont>
                    {item.name}
                  </Text>
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
