"use server";
import { Category } from "@/lib/types";
import axios from "axios";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/popular-categories`
    );
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
