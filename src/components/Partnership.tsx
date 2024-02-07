import React from 'react';
import Image from 'next/image';

interface PartnershipLogoProps {
    src: string;
    alt: string;
    size?: string; // Optional size prop to control the size of the logo
}

const PartnershipLogo: React.FC<PartnershipLogoProps> = ({ src, alt, size = 'w-28 h-28' }) => {
    // Use the size prop to dynamically set the width and height classes
    return (
        <div className={`${size} relative`}>
            <Image
                priority
                src={src}
                alt={alt}
                layout='fill'
                objectFit='contain'
            />
        </div>
    );
}


const Partnership: React.FC = () => {
    return (
        <div className='w-full flex justify-around items-center flex-wrap'>
            <PartnershipLogo
                src="/icons/usp-logo-eps.svg"
                alt="Universidade de São Paulo"
                size="w-20 h-20" // Specify a larger size for the USP logo
            />
            {/* Other logos remain unchanged */}
            <PartnershipLogo
                src="/icons/download.svg"
                alt="Universidade Federal de São Paulo"
            />
            <PartnershipLogo
                src="/icons/idiap.svg"
                alt="IDIAP Research"
            />
            <PartnershipLogo
                src="/icons/fapesp.svg"
                alt="FAPESP"
            />
            <PartnershipLogo
                src="/icons/snf.svg"
                alt="Swiss National Science Foundation"
            />
        </div>
    );
};

export default Partnership;
