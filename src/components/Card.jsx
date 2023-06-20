// import React from 'react'

const Card = ({ images, description }) => {
  console.log(images);
  if (images.length === 4 && description.length === 5) {
    return (
      <div className="w-full  bg-white text-black pt-5 pb-4">
        <div className="text-2xl font-emberBold pl-5 pb-2">
          {description[4]}
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 px-4 gap-y-2 ">
          <a href="#" className="text-black hover:text-black">
          <div className="flex flex-col items-center justify-center h-[183px] text-center">
            <img src={images[0]} alt="" className="h-[200px]" />
            <span className="line-clamp-1 mt-1 ">{description[0]} </span>
          </div>
          </a>
          <a href="#" className="text-black hover:text-black">
          <div className="flex flex-col items-center justify-center h-[183px] text-center">
            <img src={images[1]} alt="" className="h-[200px]" />
            <span className="line-clamp-1 mt-1">{description[1]} </span>
          </div>
          </a>
          <a href="#" className="text-black hover:text-black">
          <div className="flex flex-col items-center justify-center h-[183px] text-center">
            <img src={images[2]} alt="" className="h-[200px]" />
            <span className="line-clamp-1 mt-1">{description[2]} </span>
          </div>
          </a>
          <a href="#" className="text-black hover:text-black">
          <div className="flex flex-col items-center justify-center h-[183px] text-center">
            <img src={images[3]} alt="" className="h-[200px]" />
            <span className="line-clamp-1 mt-1">{description[3]} </span>
          </div>
          </a>
        </div>
      </div>
    );
  } else if (images.length === 1 && description.length === 2) {
    return (
      <div className="flex flex-col w-full  bg-white text-black pt-5 pb-3 px-5">
        <div className="text-2xl font-emberBold pb-2">
          {description[0]}
        </div>
        <a className="">
          <img src={images[0]} alt="" />
        </a>
        <div className="h-full flex items-center ">
          <a href="#" className="text-sky-700 hover:text-orange-600">{description[1]}</a>
        </div>
      </div>
    );
  } else if (images.length === 4 && description.length === 2) {
    return (
      <div className="flex flex-col w-full  bg-white text-black pt-5 pb-3 px-5">
        <div className="text-2xl font-emberBold pb-2">
          {description[0]}
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 gap-y-2 ">
          <div className="flex flex-col items-center justify-center">
            <img src={images[0]} alt="" className="h-[140px]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={images[1]} alt="" className="h-[140px]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={images[2]} alt="" className="h-[140px]" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={images[3]} alt="" className="h-[140px]" />
          </div>
        </div>
        <div className="h-full flex items-center">
          <a href="#" className="text-sky-700 hover:text-orange-600">
            {description[1]}
          </a>
        </div>
      </div>
    );
  } else if (images.length === 0 && description.length === 3) {
    return (
      <div className="flex flex-col w-full h-min  bg-white text-black p-5">
        <div className="text-2xl font-emberBold pb-2">
          {description[0]}
        </div>
        <div className="pb-4">
          {description[1]}
        </div>
        <a href="#" className="">
          <span className="text-sky-700 hover:text-orange-600">{description[2]}</span>
        </a>
      </div>
    );
  }


  
};

export default Card;
