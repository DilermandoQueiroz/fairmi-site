import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center h-14 px-8">
      <div className="flex justify-center items-center gap-12">
        <Link href="/" passHref>
          <div className="text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            Home
          </div>
        </Link>
        <Link href="/blog" passHref>
          <div className="text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            Blog
          </div>
        </Link>
        <Link href="/team" passHref>
          <div className="text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            Team
          </div>
        </Link>
        <Link href="/login" passHref>
          <div className="text-xl cursor-pointer transform transition-transform duration-300 hover:-translate-y-1">
            Login
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;