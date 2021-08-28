import { useRouter } from "next/router";

function Post({ post: { id, title, body } = {} }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ....</h1>;
  }

  return (
    <>
      <h1>
        {id} {title}
      </h1>
      <p>{body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths(params) {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // const paths = data.map(({ id }) => ({
  //   params: { postId: "" + id },
  // }));
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context || {};
  const { postId } = params || {};
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
