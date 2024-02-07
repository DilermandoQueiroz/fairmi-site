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

export default BlogCard;