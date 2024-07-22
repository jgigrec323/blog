import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* export const formatDate = (inputDate:string) => {
  const parts = inputDate.split('/').map(part => parseInt(part, 10));
  
  const dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  let formatedDate:string =`${month} ${year}`

  return formatedDate.toUpperCase() ;
}; */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
}

export function getInitials (name : string) : string {
  const names = name.split(" ");
  const initials = names.map(name => name.charAt(0).toUpperCase()).join("")
  return initials;
}