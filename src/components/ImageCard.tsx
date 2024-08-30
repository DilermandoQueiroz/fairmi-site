import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  altText?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText = 'Image' }) => {
  return (
    <div className="w-full h-auto pb-[10vw] lg:pb-[100px] flex justify-center items-center">
      <div className="relative w-full overflow-hidden rounded-[10px]">
        <Image
          src={imageUrl}
          alt={altText}
          layout="responsive"
          width={1200}
          height={400}
          objectFit="cover"
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ImageCard;