"use server";
import { Category } from "@/lib/types";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/popular-categories`);
    console.log(response.data.categories);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
