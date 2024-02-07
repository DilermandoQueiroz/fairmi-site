import React from 'react';

interface TitleProps {
    title: string;
    date: string;
    author: string;
}

const TitleBlog: React.FC<TitleProps> = ({ title, date, author }) => {
    return (
        <div className="w-full px-4 sm:pl-28 md:pl-60 lg:pl-60 py-12 lg:py-36 flex flex-col justify-center items-start">
            <div className="self-stretch text-2xl md:text-3xl lg:text-5xl font-semibold">{title}</div>
            <div className="self-stretch text-xs font-semibold mt-2">{date}</div>
            <div className="self-stretch text-xs font-semibold">{author}</div>
        </div>
    );
};

export default TitleBlog;





