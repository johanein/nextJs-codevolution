function Post({ post: { id, title, body } }) {
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
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context || {};
  const { postId } = params || {};
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
