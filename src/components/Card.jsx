// import React from 'react'

const Card = ({ images, description }) => {
  if (images.length === 4 && description.length === 5) {
    return (
      <div className="w-full z-10 bg-white text-black pt-5 pb-4">
        <div className="text-2xl font-emberBold pl-5 pb-2">
          {description[4]}
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 px-4 gap-y-2 ">
          <a href="#" className="text-black hover:text-black">
            <div className="flex flex-col items-center justify-center  text-center">
              <img src={images[0]} alt="" className="" />
              <span className="line-clamp-1 mt-1 ">{description[0]} </span>
            </div>
          </a>
          <a href="#" className="text-black hover:text-black">
            <div className="flex flex-col items-center justify-center  text-center">
              <img src={images[1]} alt="" className="" />
              <span className="line-clamp-1 mt-1">{description[1]} </span>
            </div>
          </a>
          <a href="#" className="text-black hover:text-black">
            <div className="flex flex-col items-center justify-center  text-center">
              <img src={images[2]} alt="" className="" />
              <span className="line-clamp-1 mt-1">{description[2]} </span>
            </div>
          </a>
          <a href="#" className="text-black hover:text-black">
            <div className="flex flex-col items-center justify-center  text-center">
              <img src={images[3]} alt="" className="" />
              <span className="line-clamp-1 mt-1">{description[3]} </span>
            </div>
          </a>
        </div>
      </div>
    );
  } else if (images.length === 4 && description.length === 6) {
    return (
      <div className="w-full h-full z-10 flex flex-col bg-white text-black pt-5 ">
        <div className="text-xl font-emberBold pl-5 pb-2">
          {description[4]}
        </div>

        <div className="grid grid-cols-2 grid-rows-2 px-4 gap-4 w-full h-full">
          <a href="#" className="text-black hover:text-black w-full h-full">
            <div
              className="w-full h-5/6 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
            <span className="text-xs h-1/6 mb-6 self-start">{description[0]} </span>
          </a>
          <a href="#" className="text-black hover:text-black w-full h-full">
            <div
              className="w-full h-5/6 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${images[1]})` }}
            ></div>
            <span className="text-xs h-1/6 mb-6 self-start">{description[1]} </span>
          </a>
          <a href="#" className="text-black hover:text-black w-full h-full">
            <div
              className="w-full h-5/6 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${images[2]})` }}
            ></div>
            <span className="text-xs h-1/6 mb-6 self-start">{description[2]} </span>
          </a>
          <a href="#" className="text-black hover:text-black w-full h-full">
            <div
              className="w-full h-5/6 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${images[3]})` }}
            ></div>
            <span className="text-xs h-1/6 mb-6 self-start">{description[3]} </span>
          </a>
        </div>
        <div className="px-5 h-14 mt-5 mb-2 flex items-end">
          <a href="" className="text-sky-700 hover:text-orange-600">
            {description[5]}
          </a>
        </div>
      </div>
    );
  } else if (images.length === 1 && description.length === 2) {
    return (
      <div className="flex z-10 flex-col w-full h-full bg-white text-black pt-5 pb-3 px-5">
        <div className="text-2xl font-emberBold pb-2">{description[0]}</div>
        <a className="h-full w-full">
          <div
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
        </a>
        <div className="h-16 flex items-end ">
          <a href="#" className="text-sky-700 hover:text-orange-600">
            {description[1]}
          </a>
        </div>
      </div>
    );
  } else if (images.length === 4 && description.length === 2) {
    return (
      <div className="flex z-10 flex-col w-full  bg-white text-black pt-5 pb-3 px-5">
        <div className="text-2xl font-emberBold pb-2">{description[0]}</div>
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
        <div className="h-full flex items-end  pt-2">
          <a href="#" className="text-sky-700 hover:text-orange-600">
            {description[1]}
          </a>
        </div>
      </div>
    );
  } else if (images.length === 0 && description.length === 3) {
    return (
      <div className="flex z-10 flex-col w-full h-min  bg-white text-black p-5">
        <div className="text-2xl font-emberBold pb-2">{description[0]}</div>
        <div className="pb-4">{description[1]}</div>
        <a href="#" className="">
          <span className="text-sky-700 hover:text-orange-600">
            {description[2]}
          </span>
        </a>
      </div>
    );
  }
};

export default Card;
