import Head from 'next/head';
import Header from '@/components/Header';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import Division from '@/components/Division';
import Blog from '@/components/Blog';

export default function BlogHome() {
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
        <Blog />
        <Blog />
      </div>
  );
}
