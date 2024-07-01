import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer className="py-20 lg:px-28 sm:px-16 px-10 ">
      <div className="flex flex-col sm:flex-row justify-between gap-x-5 gap-y-10">
        <div className="md:flex-1">
        <Logo />
      </div>
      <div className="md:flex-1">
        <ul className="space-y-3">
          <li className="font-bold">Pages</li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/subscribe"}>Subscribe</Link>
          </li>
        </ul>
      </div>
      <div className="md:flex-1">
        <ul className="space-y-3">
          <li className="font-bold">Categories</li>
          <li>
            <Link href={"/categories/all"}>All</Link>
          </li>
          <li>
            <Link href={"/categories/culture"}>Culture</Link>
          </li>
          <li>
            <Link href={"/categories/lifestyle"}>Lifestyle</Link>
          </li>
          <li>
            <Link href={"/categories/people"}>People</Link>
          </li>
          <li>
            <Link href={"/categories/technology"}>Technology</Link>
          </li>
        </ul>
      </div>
      <div className="md:flex-1">
        <ul className="space-y-3">
          <li className="font-bold">Contact</li>
          <li>
            <Link href={"https://www.instagram.com"}>Instagram</Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com"}>Facebook</Link>
          </li>
          <li>
            <Link href={"https://www.twitter.com"}>Twitter</Link>
          </li>
          <li>
            <Link href={"mailto:email@example.com"}>Email</Link>
          </li>
        </ul>
      </div>
      </div>
      <Divider color="bg-gray-100" className="mt-20"></Divider>
      <p className="mt-5">Built by Jean Galant.</p>
    </footer>
  );
};

export default Footer;
