"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Newsletter from "@/components/Newsletter";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="mt-16 lg:px-28 sm:px-16 px-10">{children}</main>;
};

export default Layout;
