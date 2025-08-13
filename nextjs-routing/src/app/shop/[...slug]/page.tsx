import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log("product slug is : ", slug);

  //   if (slug?.length >= 2 && slug.map(item, (i) => <p key={i}>{item}</p>)) {
  //     // return slug.map(item, (i) => <p key={i}>{item}</p>);
  //   } else if (slug.length === 1) {
  //     return <p>viewing product for category {slug[0]}</p>;
  //   }
  // return {slug?.length>2 && slug.map(item )=><p>{item}</p>}
  return (
    <div>
      Product Details Page
      {slug.length > 2 &&
        slug.map((item: string, i: number) => <p key={i}>{item}</p>)}
    </div>
  );
};

export default ProductDetails;
