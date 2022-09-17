import { useRouter } from "next/router";
import { client } from "../../utils/client";
import { GET_POST_BY_SLUG } from "../../utils/query";

function BlogPage({post}) {
    console.log(post)
    return (
        <div className="py-5">
           {post?.title}
           {post?.excerpt}
           {post?.node?.mediaItemUrl}
           

        </div>
    );
}

export default BlogPage;



export async function getServerSideProps( context ) {
    const mySlug = context.query.myblog 
    const data = await client.query({
      query: GET_POST_BY_SLUG,
      variables: {slug:mySlug},
    });
    const post = data?.data?.postBy || [];
    const pageInfo = data?.data?.post?.pageInfo || [];

    return {
      props: {
        post: post,
      },
    };
  }
  