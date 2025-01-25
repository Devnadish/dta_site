import Image from "next/image";
import React from "react";
import Text from "../Text";
import { buttonVariants } from "@/components/ui/button";
import { getLocale } from "next-intl/server";
import { Link } from "next-view-transitions";
import { cn } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const arDetail = {
  title: "كرمبو: خدمة عملاء متكاملة بكل سهولة",
  description:
    "اجعل عملاءك في قلب اهتمامك مع خدمة كرمبو! نظام مبتكر يتيح لشركتك استقبال استفسارات العملاء، التعامل مع شكاواهم، وتقدير اقتراحاتهم، كل ذلك في مكان واحد وباحترافية عالية.",
  action: "ابدأ الآن وارتقِ بخدماتك إلى مستوى جديد!",
};
const enDetail = {
  title: "Crombo: Simplified Customer Service",
  description:
    "Manage customer inquiries, complaints, and feedback seamlessly with Crombo—all in one professional platform.",
  action: "Start now",
};

async function CromboDetail() {
  const locale = await getLocale();

  return (
    <Card className="border-foreground/50 bg-muted/50 ">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-4 ">
          <div className="relative  w-[50px] h-[50px]">
            <Image
              src={"/assets/homepage/cromboPlugin.png"}
              fill
              alt={"Canon Project"}
              className="object-contain object-center " // Ensures the image covers and is centered
              priority // Optional: Prioritize loading this image
            />
          </div>
          <Text variant="p" locale={locale}>
            {locale === "ar" ? arDetail.title : enDetail.title}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <Text variant="span" locale={locale} className="text-lg">
          {locale === "ar" ? arDetail.description : enDetail.description}
        </Text>
      </CardContent>

      <CardFooter className="flex  items-center justify-center   ">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white text-black hover:bg-white/90  "
          )}
        >
          <Text variant="h2" locale={locale} className="text-sm text-wrap">
            {locale === "ar" ? arDetail.action : enDetail.action}
          </Text>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CromboDetail;
