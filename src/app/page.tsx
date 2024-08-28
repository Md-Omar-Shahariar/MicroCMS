import { client } from "../../lib/client";

export default async function Home() {
  const data = await client.get({
    endpoint: "blogs",
  });
  console.log(data);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Here is blog</h1>
        {data.contents.map((blog) => (
          <div key={blog.id} className="text-white">
            <p>{blog.title}</p>
            <p>created At: {new Date(blog.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(blog.updatedAt).toLocaleString()}</p>
            <p>Published At: {new Date(blog.publishedAt).toLocaleString()}</p>
            <p>Revised At: {new Date(blog.revisedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
