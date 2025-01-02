import Image from "next/image";
import NotFound from "@/app/Public/NotFound.png";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import CommentSection from "@/app/Components/CommentSection";

export default async function BlogDetails({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]{
    title,
    image,
    publishedAt,
    description,
    _id,
    author->{
      "bio": pt::text(bio),
      image,
      name
    }
  }`;

  const getData = await client.fetch(query, { slug });
  if (!getData) {
    return (
      <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{getData.title}</h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
        Published on{" "}
        {getData.publishedAt
          ? new Date(getData.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          : "Date not available"}
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Image
          src={getData.image ? urlForImage(getData.image).url() : NotFound.src}
          alt={getData.title || "Default Image"}
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover"
        />
      </div>
      <main
        className="text-lg sm:text-xl leading-7 mb-8
        prose-h3:text-4xl prose-h3:mb-2 prose-h3:mt-5 prose-h3:text-purple-900 prose-h3:underline
        prose-h4:text-2xl prose-h4:text-purple-500 
        prose-p:text-black
        prose-li:my-3"
      >
        <PortableText value={getData.description} />
      </main>
      <div className="flex items-center gap-4 my-20 py-8 px-4 rounded border border-gray-300">
        <div className="h-full flex-shrink-0">
          <Image
            src={
              getData.author?.image
                ? urlForImage(getData.author.image).url()
                : NotFound.src
            }
            alt={getData.author?.name || "Author Image"}
            width={100}
            height={100}
            className="object-cover h-full w-auto rounded-md "
            style={{ maxHeight: "100%" }}
          />
        </div>
        <div>
          <p className="font-bold text-base sm:text-lg">{getData.author?.name || "Unknown Author"}</p>
          <p className="text-sm sm:text-base text-gray-600">
            {getData.author?.bio || "No bio available for this author."}
          </p>
        </div>
      </div>

      <div>
        <CommentSection />
      </div>
    </div>
  );
}
