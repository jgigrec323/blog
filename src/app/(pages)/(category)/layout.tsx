"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Newsletter from "@/components/Newsletter";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");
  const currentPath = usePathname();

  function transformLinkToTitle(link: string): string {
    const cleanLink = link.replace(/^\/|\/$/g, "");

    return cleanLink
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    setPageTitle(transformLinkToTitle(currentPath));
  }, [currentPath]);
  return (
    <>
      <div className="mt-16 lg:px-28 sm:px-16 px-10 ">
        <PageTitle
          title={pageTitle}
          className="mb-10 text-3xl text-dgreen font-bold lg:text-4xl "
        ></PageTitle>
        <main className="grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 md:gap-x-8 lg:gap-x-10">
          {children}
        </main>
      </div>
      <Newsletter></Newsletter>
    </>
  );
};

export default Layout;
