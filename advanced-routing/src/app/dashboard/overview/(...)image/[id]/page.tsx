import Modal from "@/app/components/Modal";
import React from "react";

const InterceptedProfilePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <h2>Intercepted Profile Page-{id}</h2>
      <Modal id={id} />
    </div>
  );
};

export default InterceptedProfilePage;
