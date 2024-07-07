"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchCategories } from "@/actions/categoriesActions";
import { Category } from "@/lib/types";

const MobileNavigation: React.FC = () => {
  const currentPath = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    getCategories();
  }, []);

  function transformLinkToTitle(link: string): string {
    const cleanLink = link.replace(/^\/|\/$/g, "");
    return cleanLink
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={32} className="md:hidden text-dgreen cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start mt-5">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-4">
          <ul className="flex flex-col mt-7 gap-4">
            <li>
              <Link
                href="/all-articles"
                className={
                  currentPath === "/all-articles" ? "text-dgreen font-bold" : ""
                }
              >
                All Articles
              </Link>
            </li>

            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  className={
                    currentPath === `/${category.name.toLowerCase()}`
                      ? "text-dgreen font-bold"
                      : ""
                  }
                  href={`/${category.name.toLowerCase()}`}
                >
                  {transformLinkToTitle(category.name)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 ">
            <Link
              href="/about"
              className={
                currentPath === "/about" ? "text-dgreen font-bold" : ""
              }
            >
              About
            </Link>
            <Button
              variant={"outline"}
              className="bg-dgreen text-dgreen-foreground"
            >
              Buy me a coffee
            </Button>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
