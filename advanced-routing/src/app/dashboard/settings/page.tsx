import Link from "next/link";
import React from "react";

const page = () => {
  console.log("setting page rendered...");
  return (
    <div>
      <h2>Settings page</h2>{" "}
      <Link href="/image/1235" className="bg-amber-50 px-5 py-2 mt-2">
        go to Image-123
      </Link>
    </div>
  );
};

export default page;
