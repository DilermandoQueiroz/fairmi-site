import React from 'react';

interface TitleProps {
    title: string;
    date: string;
    author: string;
    paperLink?: string;
}

const TitleBlog: React.FC<TitleProps> = ({ title, date, author, paperLink }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full pb-[80px]">
            <div className="text-center pb-2 text-xl font-light">{date}</div>
            <div className="text-center text-6xl max-w-5xl pb-6">{title}</div>
            <div className="text-center pb-12 max-w-2xl text-2xl">{author}</div>
            {paperLink && (
                <div className="text-center">
                    <a href={paperLink}>
                        <div className="w-48 h-14 px-14 py-3.5 rounded-3xl border border-black justify-center items-center inline-flex hover:text-white hover:bg-black transition-all duration-300">
                            <div className="text-xl">Paper</div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
};

export default TitleBlog;