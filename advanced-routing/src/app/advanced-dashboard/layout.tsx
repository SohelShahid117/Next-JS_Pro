import React from "react";
// import Users from "./@users/page";
// import Invoices from "./@invoices/page";
// import Revenue from "./@revenue/page";
// import DashboardLayout from './layout';
// import Invoices from "./invoices/page";

type DashboardLayoutProps = {
  children: React.ReactNode;
  invoices: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
};

const DashboardLayout = ({
  children,
  invoices,
  revenue,
  users,
}: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen m-5">
      <div className="w-56 border-2 p-5">Sidebar</div>
      <div className="w-full border-2 p-5">
        <div>{children}</div>
        <div className="flex gap-5 justify-between border-b-2">
          {/* <Users />
          <Invoices /> */}
          {users}
          {invoices}
        </div>
        <div className="mt-5">
          {/* <Revenue /> */}
          {revenue}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
