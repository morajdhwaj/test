import React from "react";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import { client } from "../utils/client";
import { GET_POSTS, GET_POST_BY_SLUG } from "../utils/query";

export default function Blog({posts}) {
  return (
    <div className=" text-gray-800 text-center bg-slate-500 rounded-2xl">
      <h1 className="py-10 font-extrabold text-4xl   ">Latest Blogs</h1>
      <div className=" flex flex-wrap">
        {posts.map((post) => {
          return <Card2 key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { next } = query; 
  const data = await client.query({
    query : GET_POSTS,
    variables : {first:10},
  });

  const posts = data?.data?.posts?.nodes || [];
  const pageInfo = data?.data?.posts?.pageInfo || [];
  return {
    props: {
      posts: posts,
    },
  };
}
