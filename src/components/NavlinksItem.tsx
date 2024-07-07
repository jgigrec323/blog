"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const NavlinksItem = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/all-articles", label: "All articles" },
    { href: "/culture", label: "Culture" },
    { href: "/sport", label: "Sport" },
    { href: "/travelling", label: "Travelling" },
  ];
  return (
    <ul className="md:flex ml-16 gap-5 hidden">
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
  );
};

export default NavlinksItem;
