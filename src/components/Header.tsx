import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center h-14 px-8">
      <div className="flex justify-center items-center gap-12">
        <Link href="/" passHref>
          <div className="text-base text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            home
          </div>
        </Link>
        <Link href="/blog" passHref>
          <div className="text-base text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            blog
          </div>
        </Link>
        <Link href="/team" passHref>
          <div className="text-base text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            our team
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;