import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex gap-4 bg-gray-800 text-white p-5 mb-5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/overview">Overview</Link>
        <Link href="/dashboard/reports">Reports</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </header>
  );
};

export default Navbar;
