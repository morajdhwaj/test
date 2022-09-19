import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { client } from "../../utils/client";
import { GET_POST_BY_SLUG } from "../../utils/query";

function BlogPage({ post }) {
  console.log(post);
  console.log(post.featuredImage.node.mediaItemUrl);
  return (
    <div className="flex  items-center justify-center font-pop   ">
      <div className=" max-w-3xl py5  ">
        <div
          className="pt-5 font-extrabold text-4xl  text-gray-900  "
          dangerouslySetInnerHTML={{ __html: post.title }}
        /><div className="text-sm text-zinc-700">2022-07-09</div> 
         <div className="  pt-10 pl-10 pb-3 font-semibold text-gray-800 fo">
           -Moraj Dhwaj 
         </div>
        <div className=" flex justify-center pb-10 ">
          <Image
            height={500}
            width={900}
            src={post.featuredImage.node.mediaItemUrl}
            alt=""
            className=" "
          />
        </div>
        <div
          className=" space-y-5 text-gray-7 00 wp-content "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

export default BlogPage;

export async function getServerSideProps(context) {
  const mySlug = context.query.myblog;
  const data = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: mySlug },
  });
  const post = data?.data?.postBy || [];
  const pageInfo = data?.data?.post?.pageInfo || [];

  return {
    props: {
      post: post,
    },
  };
}
