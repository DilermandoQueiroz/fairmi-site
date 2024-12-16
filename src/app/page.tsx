// app/page.tsx
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import About from "@/components/About";
import Division from "@/components/Division";
import Blog from "@/components/Blog";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/api/blog/api";
import Link from "next/link";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div>
      <SubTitle title="Impartiality in Machine Learning with Application in Medical Images." />
      <Title title="FairMI" />
      <About />
      <Division title="Research" />
      <Blog>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} passHref key={index}>
            <BlogCard title={post.title} imageUrl={post.image} date={post.date} />
          </Link>
        ))}
      </Blog>
    </div>
  );
}