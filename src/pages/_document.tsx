import FootNote from "@/components/FootNote";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>FairMI</title>
        <meta name="description" content="Welcome to FairMI" />
        <link rel="icon" href="/idiap.svg" />
      </Head>
      <body>
        <div className='flex flex-col gap-4'>
          <div className='lg:px-24 md:px-12 px-6'>
            <div className='flex flex-col gap-4'>
            <Main />
            <NextScript />
            </div>
          </div>
        <FootNote />
        </div>
      </body>
    </Html>
  );
}
