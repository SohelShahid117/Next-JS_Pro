import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <Link href="/image/222" className="underline">
        Open image modal
      </Link>
    </div>
  );
};

export default ProfilePage;
