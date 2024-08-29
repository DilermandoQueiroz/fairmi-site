import React from 'react';

interface BlogCardProps {
    imageUrl: string;
    title: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, date }) => {
    return (
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="w-full overflow-hidden">
                <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
            </div>
            <div className="p-4 flex flex-col justify-center items-start">
                <div className="text-lg font-semibold mb-1">{title}</div>
                <div className="text-sm font-normal">{date}</div>
            </div>
        </div>
    );
};

export default BlogCard;