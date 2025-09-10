"use client";

import React, { useEffect } from "react";

const ABC = () => {
  useEffect(() => {
    throw new Error("the Error in ABC");
  }, []);
  return <div>ABC</div>;
};

export default ABC;
