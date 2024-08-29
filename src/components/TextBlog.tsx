import React from 'react';

interface TitleProps {
    text: string;
}

const TextBlog: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className="w-full flex flex-col justify-center items-start pb-[200px]">
            <div className="self-stretch text-xl max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

export default TextBlog;





