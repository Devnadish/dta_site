import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Text from "@/components/Text";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { InlineQuery } from "../../../../components/InlineQuery/InlineQuery";
export const DesinAndDiscover = async () => {
  const t = await getTranslations("homepage");
  const locale = await getLocale();
  return (
    <Card className="flex flex-col justify-between gap-8 border border-primary/80">
      <CardHeader className="p-0 gap-8 ">
        <CardTitle className="relative h-48 sm:h-64  rounded-t-xl overflow-hidden">
          <div className="relative h-48 sm:h-64 overflow-hidden  rounded-t-xl">
            <Image
              src={"/assets/homepage/images/img7.jpeg"}
              fill
              alt={"Canon Project"}
              priority // Optional: Prioritize loading this image
              className="transition-transform "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="size-6 absolute -top-2 -left-2 z-30 bg-gradient-sunset animate-pulse rounded-full " />
        </CardTitle>
        <CardDescription>
          <Text
            variant="h2"
            locale={locale}
            className="text-xl md:text-4xl text-center font-bold "
            cairoFont
          >
            {t("discoverTitle")}
          </Text>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center flex-col gap-4">
        <Text
          variant="p"
          locale={locale}
          className="text-lg md:text-xl text-center font-bold "
          // cairoFont
        >
          {t("discoverTitle1")}
        </Text>
        <Text
          variant="p"
          locale={locale}
          className="text-lg md:text-xl text-center font-bold "
          // cairoFont
        >
          {t("discoverTitle2")}
        </Text>
        <Text
          variant="p"
          locale={locale}
          className="text-lg md:text-3xl text-center font-bold "
          // cairoFont
        >
          {t("discoverTitle3")}
        </Text>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-center flex-col">
        <InlineQuery
          btnTitle={t("discoverButton")}
          title={t("discoverDilogTitle")}
          subtitle={t("discoverDilog")}
          description={t("discoverDilog1")}
        />
        <Text variant="p" locale={locale} className="text-pretty">
          {t("discoverContent")}
        </Text>
        {/* <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-primary text-primary-foreground hover:bg-white/90 flex-1 "
          )}
        >
          <Text
            variant="h2"
            locale={locale}
            className="text-sm sm:text-lg"
            cairoFont
          >
            {t("discoverButton")}
          </Text>
        </Link> */}
      </CardFooter>
    </Card>
  );
};
export default DesinAndDiscover;
