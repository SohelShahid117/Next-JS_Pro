import React from "react";
// import BlogDetails from "./page";

// const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Blog Details page : {id}</div>;
};

export default BlogDetails;
