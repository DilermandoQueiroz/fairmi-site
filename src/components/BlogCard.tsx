import React from 'react';

interface BlogCardProps {
    imageUrl: string;
    title: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, date }) => {
    return (
        <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg flex flex-col transform transition-transform duration-300">
            <div className="w-full h-2/3 overflow-hidden flex justify-center items-center">
                <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src={imageUrl} alt={title} />
            </div>
            <div className="p-4 flex flex-col justify-center items-start h-1/2">
                <div className="text-lg font-semibold mb-1">{title}</div>
                <div className="text-sm font-normal">{date}</div>
            </div>
        </div>
    );
};

export default BlogCard;