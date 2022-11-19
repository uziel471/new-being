import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Logo from "../public/assets/logo.webp";

export default function NavBar() {
  const header_content = {
    nav_items: [
    {
      name: "Primer paso",
      isSubMenu: false,
      href: "/primer-paso",
    },
    {
      name: "Tratamientos",
      isSubMenu: true,
      href: "/",
    },
    {
      name: "La Clinica",
      isSubMenu: true,
      href: "/",
    },
    {
      name: "Blog",
      isSubMenu: false,
      href: "https://clinicanuevoser.com/blog/",
    },
    {
      name: "Podcast",
      isSubMenu: false,
      href: "https://vivirdenuevo.buzzsprout.com/",
    }],
    button: "Subscribe",
  };
  return (
    <header className=" fixed z-20 bg-white from-white to-yellow-50/50 w-full ">
      {/* Nav Bar */}
      <nav className="mx-auto flex flex-row items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="relative">
          <span className="text-2xl font-bold"> <Image className="w-80" alt="Logo" src={Logo}/></span>
        </Link>
        {/* Nav Items */}
        <div className="flex flex-row space-x-8 transition">
          <ul className="hidden flex-row space-x-8 font-medium sm:flex">
            {header_content?.nav_items &&
              header_content?.nav_items.map((item, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-gray-600 hover:text-gray-800"
                >
                    <Link href={item.href} className="relative">
                     <span>{item.name}</span>
                    </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}