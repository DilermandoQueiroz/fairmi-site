// src/app/(project)/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/api/blog/api';
import markdownToHtml from '@/api/blog/markdownToHtml';
import Header from '@/components/Header';
import SubTitle from '@/components/SubTitle';
import TitleBlog from '@/components/TitleBlog';
import TextBlog from '@/components/TextBlog';

// Import do notFound (para tratar 404)
import { notFound } from 'next/navigation';

// Se a sua versão do Next.js 15 exige que params seja uma Promise, 
// você faz algo assim:
type Params = Promise<{ slug: string }>;

// O type do componente também reflete que 'params' é Promise
type BlogPostPageProps = {
  params: Params; 
};

// Se preferir tipar o retorno de generateStaticParams:
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  // Precisamos 'await' pois params agora é Promise
  const params = await props.params;
  const slug = params.slug;

  // Buscar o post
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  // Converter o markdown para HTML
  const contentHtml = await markdownToHtml(post.content || '');

  // Renderizar
  return (
    <div className="text-black">
      <Header />
      <SubTitle title="We are developing adjustable ML models for better performance and fairness" />
      <TitleBlog
        title={post.title}
        date={post.date}
        author={post.author}
        paperLink={post.paperLink}
      />
      <TextBlog text={contentHtml} />
    </div>
  );
}