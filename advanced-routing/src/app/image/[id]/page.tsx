// "use client"
import React from "react";

const ImageDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>Image Details page-{id}</div>;
};

export default ImageDetails;
