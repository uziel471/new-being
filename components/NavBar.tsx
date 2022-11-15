import React from "react";
import Link from "next/link";

export default function NavBar() {
  const header_content = {
    logo: "Landify",
    nav_items: [{
      name: "Primer paso",
      href: "/",
    }],
    button: "Subscribe",
  };
  return (
    <header className="z-20 bg-gradient-to-b from-white to-yellow-50/50 ">
      {/* Nav Bar */}
      <nav className="mx-auto flex flex-row items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="relative">
          <span className="text-2xl font-bold">{header_content?.logo}</span>
          <span className="absolute -right-2 top-0 text-[8px]">TM</span>
        </Link>
        {/* Nav Items */}
        <div className="flex flex-row space-x-8 transition">
          <ul className="hidden flex-row space-x-6 font-medium sm:flex">
            {header_content?.nav_items &&
              header_content?.nav_items.map((item, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-gray-600 hover:text-gray-800"
                >
                  <span>{item.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}