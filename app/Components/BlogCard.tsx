import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import NotFound from "@/app/Public/NotFound.png";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type BlogPost = {
  title: string;
  image: SanityImageSource;
  summary: string;
  slug: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.image
    ? urlForImage(post.image).fit("crop").width(300).height(200).url()
    : NotFound.src;

  return (
    <div className="p-4 border rounded-lg shadow-md h-full flex flex-col justify-between">
      <Link href={`/blog/${post.slug}`}
      ><Image
          src={imageUrl}
          alt={post.title || "Default blog image"}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-[200px] mb-4"
        /></Link>
      <h2 className="text-xl font-bold mb-3">{post.title}</h2>
      <p className="text-xl text-gray-600 mb-4 line-clamp-3">{post.summary}</p>
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read more about ${post.title}`}
        className="text-purple-800 text-center px-5 py-3 text-xl border-2 rounded-md border-purple-800 hover:bg-purple-800 hover:text-white transition-all"
      >
        Read More
      </Link>
    </div>
  );
}