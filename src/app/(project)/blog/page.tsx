// app/blog/page.tsx
import { getAllPosts } from "@/api/blog/api";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Division from "@/components/Division";
import Blog from "@/components/Blog";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default async function BlogHome() {
  const posts = await getAllPosts();
  
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <SubTitle title="We are developing adjustable ML models for better performance and fairness." />
      <Title title="Blog" />
      <Division title="Research" />
      <Blog>
        {sortedPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} passHref key={index}>
            <BlogCard
              title={post.title}
              imageUrl={post.image}
              date={post.date}
            />
          </Link>
        ))}
      </Blog>
    </div>
  );
}