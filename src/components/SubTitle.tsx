import React from 'react';

interface SubTitleProps {
    title: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
    return (
        <div className="w-full h-7 flex-col justify-center items-center inline-flex pb-[200px]">
            <div className="self-stretch grow shrink basis-0 text-center text-xs font-normal ">{title}</div>
        </div>
    );
};

export default SubTitle;
