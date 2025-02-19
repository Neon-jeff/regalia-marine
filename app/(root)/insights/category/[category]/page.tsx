import {
  Filter,
  InsightHeader,
  LatestNews,
  NewsCard,
} from "@/components/insights";
import { client } from "@/sanity/lib/client";
import React from "react";
import { PostType } from "@/utils/types";
import { getImageUrl } from "@/utils/sanityImageUrl";

export const revalidate = 0;

const fetchPost = async (category: string): Promise<Array<PostType>> => {
  const query = `*[_type == 'posts' && category->.slug.current=='${category}']{title,description,_createdAt,body,'slug':slug.current,coverimage,'category':category->.name}`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
};

const Insights = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { category } = await params;
  console.log(category);
  const posts = await fetchPost(category);
  return (
    <div className="pb-36 bg-white  place-items-center  mx-auto ">
      <InsightHeader />
      {/* blog layout */}
      <div className="flex lg:px-10 px-4  min-h-screen w-full  relative max-md:flex-col">
        <Filter />
        <div className="w-4/5 max-md:w-full">
          {/* <LatestNews/> */}
          {/* all news layout here */}

          <div className="lg:px-20 lg:mt-10">
            <p className="border mb-6 bg-gray-50 w-fit p-2 max-md:px-5 text-sm rounded-full">
              All Posts
            </p>

            {posts.length == 0 && (
              <div className="p-5 bg-green-50 rounded-xl text-green-950 ">
                <p>No posts found for this category</p>
              </div>
            )}
            <div className="grid grid-cols-3 gap-y-16 gap-10 max-md:gap-y-20 lg:mt-10 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              {posts.map((item, index) => (
                <NewsCard
                  key={index}
                  {...{
                    ...item,
                    coverimage: getImageUrl(item.coverimage).url(),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
