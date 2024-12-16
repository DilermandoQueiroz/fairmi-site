import SubTitle from '@/components/SubTitle';
import TextBlog from '@/components/TextBlog';
import TitleBlog from '@/components/TitleBlog';
import { getAllPosts, getPostBySlug } from '@/api/blog/api';
import markdownToHtml from '@/api/blog/markdownToHtml';
import { notFound } from 'next/navigation';

type BlogPostProps = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = params;

    const post = getPostBySlug(slug);
    if (!post) {
        notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
      <>
        <SubTitle title="We are developing adjustable ML models for better performance and fairness" />
        <TitleBlog 
            title={post.title}
            date={post.date}
            author={post.author}
            paperLink={post.paperLink}
            />
        <TextBlog text={content} />
      </>
    );
}