import React from "react";
import { client } from "../utils/client";
import { GET_POSTS } from "../utils/query";

export default function Blog({ posts, pageInfo }) {
  console.log(posts);

  return (
    <div className=" text-gray-800
     flex justify-center items-center flex-col">
      <h1 className="py-10 font-extrabold text-4xl  " >Latest Blogs</h1>
      {posts.map((post) => {
        return (
          <ul key={post.slug}>
            <li className="font-bold">{post.title}</li>
            {/* <li>{post.content}</li> */}

            
          </ul>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { next } = query;
  const data = await client.query({
    query: GET_POSTS,
    variables: { first: 10, after: next || null },
  });

  const posts = data?.data?.posts?.nodes || [];
  const pageInfo = data?.data?.posts?.pageInfo || [];
  return {
    props: {
      posts,
      pageInfo,
    },
  };
}
