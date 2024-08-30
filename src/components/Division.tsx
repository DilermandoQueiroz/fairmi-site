import React from 'react';

interface DivisionProps {
    title: string;
}

const Division: React.FC<DivisionProps> = ({ title }) => {
    return (
        <div className="w-full h-14 border-t border-blue-700 justify-start items-start inline-flex font-extralight pb-[100px]">
            <div className="pt-1 justify-start items-start flex">
                <div className="w-full text-xl">{title}</div>
            </div>
        </div>
    );
};

export default Division;
