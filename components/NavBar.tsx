import Link from "next/link";
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../public/assets/logo.webp";
import { useState } from "react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
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
          name: "Trastornos",
          href: "/transtornos",
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

  const handlerMenu = () => {
    let list = document.querySelector("ul");
    if (!openMenu && list) {
      setOpenMenu(true);
      list.classList.remove("top-[-400px]");
      list.classList.add("top-[70px]");
      list.classList.add("opacity-100");
    } else if (list && openMenu) {
      setOpenMenu(false);
      list.classList.add("top-[-400px]");
      list.classList.remove("top-[70px]");
      list.classList.remove("opacity-100");
    }
  };

  return (
    <header className=" fixed z-20 bg-white from-white to-yellow-50/50 w-full ">
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-[poppins] cursor-pointer"> <Image className="lg:w-80 md:w-40 w-36" alt="Logo" src={Logo}/></span>
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            { openMenu ? <AiOutlineClose onClick={handlerMenu} /> : <AiOutlineMenu onClick={handlerMenu} /> }
          </span>
        </div>
        <ul
          className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400px] transition-all ease-in duration-500"
          id="menuList"
        >
          {header_content?.nav_items &&
            header_content?.nav_items.map((item, i) => {
              if (!item.isSubMenu) {
                return (
                  <li
                    key={i}
                    className="mx-4 my-6 md:my-0"
                  >
                    <Link href={item.href} className="">
                    <span>{item.name}</span>
                    </Link>
                  </li>
                )
              }
              return (
                <div className="dropdown mx-4 my-6 md:my-0" key={i}>
                  <button className="text-gray-600 font-semibold py-1 px-0 rounded inline-flex items-center">
                    <span className="mr-1">{item.name}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-600 pt-1 bg-[#00C1DE]">
                    {item.childrens.map((child, i) => (
                      <Link href={child.href} className="rounded-t py-2 px-4 block text-white" key={`${i} - ${child}`} >
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) 
          })}
        </ul>
      </nav>
    </header>
  );
}