import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (inputDate:string) => {
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
};
