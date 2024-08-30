import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  altText?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText = 'Image' }) => {
  return (
    <div className="w-full h-auto pb-[70px] flex justify-center items-center">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ImageCard;