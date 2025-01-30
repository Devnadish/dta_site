import Image from "next/image";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { getLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const arDetail = {
  name: "كرمبو",
  title: "خدمة عملاء سهلة وشاملة في متناول يدك",
  description:
    "مع كرمبو، اجعل تجربة عملائك لا تُنسى! نظام ذكي يتيح لك استقبال الاستفسارات، معالجة الشكاوى، والاستفادة من الاقتراحات بسهولة واحترافية. يضمن كرمبو تواصلاً فوريًا وبناء علاقة ثقة طويلة الأمد مع عملائك، مما يجعل عملك أقرب إليهم وأكثر نجاحًا.",

  action: "ابدأ ولا تفقد عميلًا بعد اليوم!",
  free: "🚀 جرّب مجانًا الآن ولا تفوّت الفرصة! ",
};

const enDetail = {
  name: "Crombo",
  title: "Effortless and Comprehensive Customer Service",
  description:
    "Transform your customer experience with Crombo! Seamlessly manage inquiries, resolve complaints, and embrace feedback with a smart platform designed to bring your business closer to your customers.",
  action: "Get started",
  free: "Try for Free Now!",
};

async function CromboDetail() {
  const locale = await getLocale();

  return (
    <Card className="flex items-center justify-between flex-col bg-gradient-blue-modern dark:bg-gradient-custom border border-white/70 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-4 ">
          <Text
            variant="p"
            locale={locale}
            className="text-xl font-bold"
            cairoFont
          >
            {locale === "ar" ? arDetail.name : enDetail.name}
          </Text>
        </CardTitle>
        <CardDescription>
          <Text variant="p" locale={locale} cairoFont>
            {locale === "ar" ? arDetail.title : enDetail.title}
          </Text>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Inline Image */}
          <div className="relative w-[70px] h-[130px] flex-shrink-0">
            <Image
              src={"/assets/homepage/cromboPlugin.png"}
              fill
              alt={"Canon Project"}
              className="object-contain object-center"
              sizes="(max-width: 400px) 100vw, 400px"
              priority
            />
          </div>
          <Text variant="span" locale={locale} className="text-lg leading-6">
            {locale === "ar" ? arDetail.description : enDetail.description}
          </Text>
        </div>
      </CardContent>

      <CardFooter className="flex  items-center justify-center flex-col  w-full ">
        <span className="font-bold animate-pulse   rounded ">
          {arDetail.free}
        </span>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white text-black text-lg hover:bg-white/90  "
          )}
        >
          <Text
            variant="h2"
            locale={locale}
            className="text-lg text-wrap"
            cairoFont
          >
            {locale === "ar" ? arDetail.action : enDetail.action}
          </Text>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CromboDetail;
