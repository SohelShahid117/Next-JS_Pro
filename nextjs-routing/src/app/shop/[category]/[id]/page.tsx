import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string; category: string }>;
}) => {
  const { id, category } = await params;
  return (
    <div>
      <p>Product Details-{id}</p>
      <p>Product category-{category}</p>
    </div>
  );
};

export default ProductDetails;
