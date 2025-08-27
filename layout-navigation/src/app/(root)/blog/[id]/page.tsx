import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  return {
    title: `Blog Post-${id}`,
    description: ".........................",
  };
}

const SingleBlog = async ({ params }: Props) => {
  // const SingleBlog =  () => {
  const { id } = await params;
  console.log("id is :", id);
  return <div>Single Blog - {id}</div>;
};

export default SingleBlog;
