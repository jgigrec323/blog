"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchCategories } from "@/actions/categoriesActions";
import { Category } from "@/lib/types";

const NavlinksItem = () => {
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
    <ul className="md:flex ml-16 gap-5 hidden">
      <Link
        href={"/all-articles"}
        className={
          currentPath === "/all-articles" ? "text-dgreen font-bold" : ""
        }
      >
        All Articles
      </Link>

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
  );
};

export default NavlinksItem;
