"use client";
import React, { useEffect } from "react";

const XYZ = () => {
  useEffect(() => {
    //throw new Error("the Error in ABC");
    throw new Error("the Error in XYZ");
  }, []);
  return <div>XYZ</div>;
};

export default XYZ;
