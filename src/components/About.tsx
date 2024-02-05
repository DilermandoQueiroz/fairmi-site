import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-24 flex justify-center items-center w-full">
            <div className="flex items-start justify-start flex-grow">
                <div className="text-xl lg:text-2xl font-normal">
                We are developing adjustable ML models for better performance and fairness, quantifying impartiality limits, and creating systems that integrate human decision-making fairly. Our goal is to improve safety and set new standards for responsible AI in healthcare.
                </div>
            </div>
        </div>
    );
};

export default About;
