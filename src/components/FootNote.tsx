import Image from 'next/image';
import GitHub from "../../public/icons/github.svg";
import React from 'react';

const FootNote: React.FC = () => {
    return (
        <footer className="w-full bg-blue-700 flex justify-between items-center px-6 md:px-12 lg:px-24 h-12">
            <div className="text-white text-2xl font-normal">🏥 FairMI</div>
            <a href="https://github.com/project-fairmi" aria-label="GitHub">
                <Image
                    className='w-8 h-8'
                    priority
                    src={GitHub}
                    alt="Follow us on GitHub"
                />
            </a>
        </footer>
    );
};

export default FootNote;