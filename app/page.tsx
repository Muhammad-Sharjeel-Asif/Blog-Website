import { client } from "@/sanity/lib/client";
import BlogCard from "./Components/BlogCard";
import { BlogPost } from "./Components/BlogCard";

export const revalidate = 10;

export default async function Home() {
  const query = `*[_type == "blog" && defined(slug.current)] | order(_createdAt desc) {
    title,
    image,
    "summary": pt::text(summary),
    "slug": slug.current
  }`;


  const getData = await client.fetch(query);
  // console.log(getData)

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600">Explore the latest stories and updates</p>
      </header>
      <section className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getData.map((post: BlogPost) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}