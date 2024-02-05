import React from 'react';

interface TitleProps {
    text: string;
}

const TextBlog: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="w-full pl-60 pr-72 pb-14 flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-base font-semibold font-['Inter']">{text}</div>
        </div>
    );
};

export default TextBlog;





