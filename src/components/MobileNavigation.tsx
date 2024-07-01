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
import NavlinksItem from "./NavlinksItem";
import Link from "next/link";
import Divider from "./Divider";

const MobileNavigation = () => {
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
            <li>All articles</li>
            <li>Culture</li>
            <li>Sports</li>
            <li>Traveling</li>
          </ul>
          <div className="flex flex-col gap-4 ">
            <Link href={"/about"}>About</Link>
            <Button variant={"outline"} className="bg-dgreen text-dgreen-foreground">Subscribe</Button>
          </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
