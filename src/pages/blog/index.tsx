import Head from 'next/head';
import Header from '@/components/Header';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import Division from '@/components/Division';
import Blog from '@/components/Blog';
import BlogCard from '@/components/BlogCard';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/api';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function BlogHome({ posts }: { posts: any[] }) { // Use TypeScript to define the props type
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to FairMI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SubTitle title="We are developing adjustable ML models for better performance and fairness."/>
      <Title title="BLOG"/>
      <Division title='Research'/>
      <Blog>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} passHref>
            <BlogCard 
              key={index}
              title={post.title}
              imageUrl={post.image}
              date={post.date}/>
          </Link>
        ))}
      </Blog>
    </div>
  );
}
