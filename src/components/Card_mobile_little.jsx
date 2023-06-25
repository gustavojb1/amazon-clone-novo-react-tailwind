// import React from 'react'

const Card_mobile_little = ({text, image}) => {
  if (text.length>0) {
    return (
      <div className="min-w-[136px] w-[136px] bg-white rounded flex flex-col drop-shadow-[0_3px_8px_rgba(0,0,0,0.24)] ">
        <div className="leading-5 p-1 text-black">{text}</div>
        <div className="py-1 flex justify-center">
          <img src={image} alt="" className="max-h-[130px]" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-w-[136px] w-[136px]  bg-white rounded flex flex-col drop-shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
        <div className="flex items-center justify-center h-full w-full rounded">
          <img src={image} alt="" className="rounded" />
        </div>
      </div>
    );
  }
};

export default Card_mobile_little;