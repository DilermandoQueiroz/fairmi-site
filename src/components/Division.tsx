import React from 'react';

interface DivisionProps {
    title: string;
}

const Division: React.FC<DivisionProps> = ({ title }) => {
    return (
        <div className="w-full h-14 border-t border-blue-700 justify-start items-start inline-flex font-extralight">
            <div className="pt-2.5 justify-start items-start flex">
                <div className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{title}</div>
            </div>
        </div>
    );
};

export default Division;
