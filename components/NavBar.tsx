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
      childrens: [],
    },
    {
      name: "Tratamientos",
      isSubMenu: true,
      href: "/",
      childrens: [
        {
          name: "Adicciones",
          href: "/adicciones",
        },
        {
          name: "Enfermedades mentales",
          href: "/enfermedades-mentales",
        },
        {
          name: "Transtornos alimenticios",
          href: "/transtornos-alimenticios",
        },
        {
          name: "Codependencia",
          href: "/codependencia",
        }
      ]
    },
    {
      name: "La Clinica",
      isSubMenu: true,
      href: "/",
      childrens: [
        {
          name: "Sobre nosotros",
          href: "/sobre-nosotros",
        },
        {
          name: "Instalaciones",
          href: "/instalaciones",
        },
      ]
    },
    {
      name: "Blog",
      isSubMenu: false,
      href: "https://clinicanuevoser.com/blog/",
      childrens: []
    },
    {
      name: "Podcast",
      isSubMenu: false,
      href: "https://vivirdenuevo.buzzsprout.com/",
      childrens: []
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
              header_content?.nav_items.map((item, i) => {
                if (!item.isSubMenu) {
                  return (
                    <li
                      key={i}
                      className="flex cursor-pointer flex-row items-center space-x-2 text-gray-600 hover:text-gray-800"
                    >
                        <Link href={item.href} className="relative">
                         <span>{item.name}</span>
                        </Link>
                    </li>
                  )
                }
                return (
                    <div className="dropdown inline-block relative" key={i}>
                      <button className="text-gray-600 font-semibold py-1 px-0 rounded inline-flex items-center">
                        <span className="mr-1">{item.name}</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-600 pt-1 bg-[#00C1DE]">
                        {item.childrens.map((child, i) => (
                          <Link href={child.href} className="rounded-t py-2 px-4 block whitespace-no-wrap text-white" key={`${i} - ${child}`} >
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </ul>
                    </div>
                ) 
              })}
          </ul>
        </div>
      </nav>
    </header>
  );
}