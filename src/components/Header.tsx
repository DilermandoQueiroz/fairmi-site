import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center w-full h-14 px-4 md:px-12">
      <div className="flex items-center w-auto flex-shrink-0">
        <Link href="/" passHref>
          <div className="text-lg md:text-2xl font-normal">🏥FairMI</div>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-start ml-4 md:ml-24 gap-4 md:gap-6">
        {/* Usar o componente Link para navegação */}
        <Link href="/" passHref><div className="text-sm md:text-base font-normal cursor-pointer hover:-translate-y-1 transition-transform">home</div></Link>
        <Link href="/blog" passHref><div className="text-sm md:text-base font-normal cursor-pointer hover:-translate-y-1 transition-transform">blog</div></Link>
        <Link href="/join" passHref><div className="text-sm md:text-base font-normal cursor-pointer hover:-translate-y-1 transition-transform">join</div></Link>
      </div>
    </div>
  );
};

export default Header;
