import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <header>
      <div className="flex justify-between max-w-7xl mx-auto my-5 border-b-3">
        <Link href="/">Logo</Link>
        <nav>
          <ul className="flex gap-5">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
