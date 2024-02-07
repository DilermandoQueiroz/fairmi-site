import Head from 'next/head';
import Header from '../components/Header';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import About from '@/components/About';
import Division from '@/components/Division';
import Blog from '@/components/Blog';
import { getAllPosts } from '@/lib/api';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: { posts: any[] }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to FairMI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SubTitle title="Impartiality in Machine Learning with Application in Medical Images."/>
      <Title title="FAIRNESS"/>
      <About />
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
