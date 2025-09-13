import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <h3 className="text-lg">Notifications</h3>
      <Link href="/advanced-dashboard/alerts" className="bg-blue-500 p-2 m-5">
        Alerts
      </Link>
    </div>
  );
};

export default Notifications;
