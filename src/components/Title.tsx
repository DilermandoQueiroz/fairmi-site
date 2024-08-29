import React from 'react';

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-[300px] pb-[100px]">
      {/* <div className="text-center text-8xl md:text-[10rem] xl:text-[14rem] font-black"> */}
      <div className="text-center text-8xl md:text-[10rem] xl:text-[14rem] font-black">
        {title}
      </div>
    </div>
  );
};

export default Title;