import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="text-dgreen text-2xl font-bold">
      <Link href={"/"}>WeBlo</Link>
    </div>
  );
}

export default Logo;
