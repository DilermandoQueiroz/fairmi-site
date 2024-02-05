import Image from 'next/image';
import GitHub from "../../public/github.svg";
import React from 'react';

const FootNote: React.FC = () => {
    return (
        <div className="w-full h-12 lg:px-24 md:px-12 px-6 bg-blue-700 flex-col justify-start items-start gap-7 inline-flex">
            <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-7 justify-start items-start flex">
                    <div className="text-white text-2xl font-normal ">🏥FairMI</div>
                </div>
                <div className="grow shrink basis-0 h-8 justify-end items-center flex">
                    <a href="https://github.com/project-fairmi">
                        <Image
                            className='w-8 h-8'
                            priority
                            src={GitHub}
                            alt="Follow us on GitHub"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FootNote;
