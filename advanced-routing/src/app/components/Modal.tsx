"use client";

import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const Modal = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-3">
        <h2 className="text-xl">Image ID : {id}</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-4xl w-full mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
