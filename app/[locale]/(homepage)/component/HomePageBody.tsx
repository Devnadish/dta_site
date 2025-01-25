import { useTranslations } from "next-intl";
import React from "react";
import Text from "@/components/Text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
import { getLocale } from "next-intl/server";
async function HomePageBody() {
  const locale = await getLocale();
  return (
    <main className="grid  gap-4 grid-cols-1 md:grid-cols-1">
      <FromIdea locale={locale} />
      <DesinAndDiscover locale={locale} />

      {/* {locale === "ar" ? <ArMobileTimeLine /> : <EnMobileTimeLine />} */}
      <Services />
      <WhyChooseUs />
      <Footer />

      {/* <Service />
      <Technical /> */}
    </main>
  );
}

export default HomePageBody;

export const FromIdea = ({ locale }: { locale: string }) => {
  const t = useTranslations("homepage");
  return (
    <Card className="border-foreground/50 bg-muted/50">
      <CardHeader className="p-0 ">
        <CardTitle className="flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="relative  w-full h-[200px]">
            <Image
              src={"/assets/homepage/images/website.jpeg"}
              fill
              alt={"Canon Project"}
              className="object-cover object-center rounded-t-2xl" // Ensures the image covers and is
              priority // Optional: Prioritize loading this image
            />
          </div>
          <Text variant="h2" locale={locale} className="text-xl md:text-4xl ">
            {t("fromIdeaTitle")}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="p" locale={locale} className="text-pretty">
          {t("fromIdeaContent")}
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
            {t("fromIdeaButton")}
          </Text>
        </Link>
      </CardFooter>
    </Card>
  );
};
export const DesinAndDiscover = ({ locale }: { locale: string }) => {
  const t = useTranslations("homepage");
  return (
    <Card className="border-foreground/50 bg-muted/50">
      <CardHeader className="p-0 ">
        <CardTitle className="flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="relative  w-full h-[200px]">
            <Image
              src={"/assets/homepage/images/img7.jpeg"}
              fill
              alt={"Canon Project"}
              className="object-cover object-center rounded-t-2xl" // Ensures the image covers and is
              priority // Optional: Prioritize loading this image
            />
          </div>
          <Text variant="h2" locale={locale} className="text-xl md:text-4xl ">
            {t("discoverTitle")}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="p" locale={locale} className="text-pretty">
          {t("discoverContent")}
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
            {t("discoverButton")}
          </Text>
        </Link>
      </CardFooter>
    </Card>
  );
};

export const Service = () => {
  return <>service</>;
};
export const Technical = () => {
  return <>tecno</>;
};
