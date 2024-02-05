import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="w-full pt-24 flex flex-col justify-center items-center">
            <div className="responsive-title italic">{title}</div>
        </div>
    );
};

export default Title;




