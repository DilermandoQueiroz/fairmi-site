import React from 'react';

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-[255px] pb-[100px]">
      <div className="text-center text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black">
        {title}
      </div>
    </div>
  );
};

export default Title;