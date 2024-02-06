import React from 'react';
import Image from 'next/image';

interface PartnershipLogoProps {
    src: string;
    alt: string;
}

const PartnershipLogo: React.FC<PartnershipLogoProps> = ({ src, alt }) => {
    return (
        <div className='w-28 h-28 relative'>
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
                src="usp.svg"
                alt="Universidade de São Paulo"
            />
            <PartnershipLogo
                src="/hc.png"
                alt="Hospital das Clínicas"
            />
            <PartnershipLogo
                src="/unifesp.svg"
                alt="Universidade Federal de São Paulo"
            />
            <PartnershipLogo
                src="/idiap.svg"
                alt="IDIAP Research"
            />
            <PartnershipLogo
                src="/fapesp.svg"
                alt="FAPESP"
            />
            <PartnershipLogo
                src="/snf.svg"
                alt="Swiss National Science Foundation"
            />
        </div>
    );
};

export default Partnership;
