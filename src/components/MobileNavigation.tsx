"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/all-articles", label: "All articles" },
    { href: "/culture", label: "Culture" },
    { href: "/sport", label: "Sport" },
    { href: "/travelling", label: "Travelling" },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoIosMenu size={32} className="md:hidden text-dgreen cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start mt-5">
            <Logo></Logo>
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-4">
          <ul className="flex flex-col mt-7 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={currentPath === link.href ? "text-dgreen font-bold" : ""}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 ">
            <Link href={"/about"}  className={currentPath === "/about" ? "text-dgreen font-bold" : ""}>About</Link>
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
