import Head from 'next/head';
import Header from '../components/Header';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import About from '@/components/About';
import Division from '@/components/Division';
import Blog from '@/components/Blog';

export default function Home() {
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
      <Blog />
    </div>
  );
}
