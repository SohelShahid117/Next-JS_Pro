"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const pathName = usePathname()
  console.log(pathName)
  return (
    <header>
      <div className="flex justify-between max-w-7xl mx-auto my-5 border-b-3">
        <Link href="/">Logo</Link>
        <nav>
          <ul className="flex gap-5">
            {navItems.map((item, i) =>     {
              // const x = 5;
              // console.log(x)

              const isActive = pathName == item.href;
              console.log(isActive)
              return (
              <li key={i}>
                <Link href={item.href} className={`px-3 py-1 text-gray-500 ${isActive?"text-orange-500 font-bold":""}`}>{item.name}</Link>
              </li>
            )
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
