import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  altText?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, altText = 'Image' }) => {
  return (
    <div className="w-full max-w-screen-lg h-auto pb-[70px] flex-col justify-center items-center flex">
      <Image
        src={imageUrl}
        alt={altText}
        layout="responsive"
        width={948}
        height={396}
        className="rounded-[10px] object-cover"
      />
    </div>
  );
};

export default ImageCard;