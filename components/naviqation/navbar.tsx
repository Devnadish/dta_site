"use client"; // Required in Next.js 15 for hooks in client components

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Logo from "./logo";
import ThemeSwitch from "./ThemeSwitch";
import LangSwicher from "./LangSwicher";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get current path
  const pathnames = React.useMemo(
    () => (pathname ? pathname.split("/").filter((x) => x) : []),
    [pathname]
  );

  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        {/* Breadcrumb Component */}
        <Breadcrumb>
          <BreadcrumbList>
            {/* Home Breadcrumb */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Dynamic Breadcrumbs */}
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return (
                <React.Fragment key={to}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{formatBreadcrumb(value)}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={to}>{formatBreadcrumb(value)}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 px-4">
        <LangSwicher />
        {/* <ThemeSwitch /> */}
        <Logo />
      </div>
    </header>
  );
};

// Function to format breadcrumb labels (capitalize and replace dashes)
const formatBreadcrumb = (text: string): string => {
  return text
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};

export default Navbar;
