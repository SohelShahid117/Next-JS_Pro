import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 min-h-screen m-5">
      <div>Side bar</div>
      <div className="flex-grow border p-10">{children}</div>
    </div>
  );
};

export default Layout;
