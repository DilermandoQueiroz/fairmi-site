import React from 'react';

interface TitleProps {
    text: string;
}

const TextBlog: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="w-full px-4 sm:pl-28 md:pl-60 md:pr-48 lg:pl-60 lg:pr-60 flex flex-col justify-center items-start pb-[200px]">
            <div className="self-stretch text-base"
                dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default TextBlog;





