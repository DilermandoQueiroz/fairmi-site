import React from 'react';

const Blog: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-7">
            <BlogCard
                imageUrl="https://via.placeholder.com/300x300"
                title="Fostering Fairness in Medical Image Datasets: Identification of Protected Attributes Through Foundation Models"
                date="January 21, 2024"
            />
            <BlogCard
                imageUrl="https://via.placeholder.com/300x300"
                title="Fostering Fairness in Medical Image Datasets: Identification of Protected Attributes Through Foundation Models"
                date="January 21, 2024"
            />
            <BlogCard
                imageUrl="https://via.placeholder.com/300x300"
                title="Fostering Fairness in Medical Image Datasets: Identification of Protected Attributes Through Foundation Models"
                date="January 21, 2024"
            />
        </div>
    );
};

interface BlogCardProps {
    imageUrl: string;
    title: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, date }) => {
    return (
        <div className="grow shrink basis-0 self-stretch border border-blue-700 flex-col justify-center items-center inline-flex">
            <div className="self-stretch grow shrink basis-0 px-7 pt-7 justify-center items-center inline-flex">
                <img className="grow shrink basis-0 self-stretch" src={imageUrl} />
            </div>
            <div className="self-stretch p-7 flex-col justify-center items-center flex">
                <div className="self-stretch text-xs font-semibold ">{title}</div>
                <div className="self-stretch text-xs font-normal ">{date}</div>
            </div>
        </div>
    );
};

export default Blog;