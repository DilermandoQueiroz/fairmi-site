import Header from '@/components/Header';
import SubTitle from '@/components/SubTitle';
import TextBlog from '@/components/TextBlog';
import TitleBlog from '@/components/TitleBlog';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import markdownToHtml from '@/lib/markdownToHtml';

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params || {};

    if (!slug) {
        return { notFound: true };
    }

    const post = getPostBySlug(slug.toString());
    const content = await markdownToHtml(post?.content || "");

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            slug: slug.toString(),
            post,
            content
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));
    
    return { paths, fallback: false };
};

export default function BlogPost({ post, content }: { post: any, content: string}) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className='text-black'>
            <Header />
            <SubTitle title="We are developing adjustable ML models for better performance and fairness"/>
            <TitleBlog 
                title={post.title}
                date={post.date}
                author={post.author}
                paperLink={post.paperLink}
            />
            <TextBlog text={content} />
        </div>
    );
}
