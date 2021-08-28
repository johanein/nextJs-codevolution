import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps(params) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
