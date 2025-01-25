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
import News from "../../app/[locale]/(homepage)/component/animatNews";

const arDetail = {
  title: "كانون: منصتك الذكية للأخبار الموثوقة والمصممة للشركات والمؤسسات",
  description:
    "كانون: شريكك في النجاح الرقمي في عصر السرعة والمنافسة، تُعد خدمة كانون الحل المثالي للشركات والمؤسسات مثل العيادات والمعارض لتي تسعى إلى تعزيز حضورها الرقمي وإبقاء جمهورها على اطلاع دائم. مع شخصية المحقق كانون، ستقدم محتوى يلفت الأنظار ويترك انطباعًا لا يُنسى.",
  action: "ابدأ الآن وارتقِ بخدماتك !",
};

const enDetail = {
  title:
    "Canon: Your Smart Platform for Reliable and Tailored News for Businesses and Institutions",
  description:
    "Boost your digital presence with Canon's engaging, reliable content. Deliver impactful updates that leave a lasting impression.",
  action: "Start now",
};

async function CanonDetail() {
  const locale = await getLocale();

  return (
    <Card className="border-foreground/50 bg-muted/50">
      <CardHeader>
        <CardTitle className="flex  md:flex-row items-center gap-4">
          <div className="relative  w-[50px] h-[50px]">
            <Image
              src={"/assets/homepage/canon.png"}
              fill
              alt={"Canon Project"}
              className="object-contain object-center " // Ensures the image covers and is centered
              priority // Optional: Prioritize loading this image
            />
          </div>
          <Text variant="p" locale={locale} className="text-lg">
            {locale === "ar" ? arDetail.title : enDetail.title}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="span" locale={locale} className="text-lg">
          {locale === "ar" ? arDetail.description : enDetail.description}
        </Text>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-between">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white text-black hover:bg-white/90 flex-1 "
          )}
        >
          <Text variant="h2" locale={locale} className="text-sm">
            {locale === "ar" ? arDetail.action : enDetail.action}
          </Text>
        </Link>
        <News />
      </CardFooter>
    </Card>
  );
}

export default CanonDetail;
