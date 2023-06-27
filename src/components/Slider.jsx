import { useRef, useState } from "react";

const Slider = ({ images, tittle }) => {
  const [visible, setVisible]=useState("opacity-0")
  const inputEl = useRef(null);
  let count = 0;

  const scrolLeft = () => {
    if (count == 0) {
      count = 1;
      let slide = inputEl.current;
      let width = slide.offsetWidth;
      slide.scrollLeft -= width;
      setTimeout(function () {
        count = 0;
      }, 500);
    }
  };

  const scrolRight = () => {
    if (count == 0) {
      count = 1;
      let slide = inputEl.current;
      let width = slide.offsetWidth;
      slide.scrollLeft += width;
      setTimeout(function () {
        count = 0;
      }, 500);
    }
  };

  function handleMouseEnter(){
    setVisible("opacity-100")
  }
  function handleMouseLeave(){
    setVisible("opacity-0")
  }

  return (
    <div className="px-8 md:block hidden "
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className="p-5 w-full bg-white text-black text-2xl font-emberBold relative">
        {tittle}
        <div
          ref={inputEl}
          className="flex gap-x-3 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {images?.map((image, index) => {
            return (
              <a href="#" className="shrink-0 min-w-[145px] flex justify-center" key={index}>
                <img className="max-h-[200px] " src={image} alt="" />
              </a>
            );
          })}
        </div>
        <button
          onClick={scrolLeft}
          className={`absolute left-5 top-[35%] h-[100px] w-[45px] bg-white rounded hover:border-transparent flex items-center justify-center focus-visible:outline-none focus:outline-none  ${visible} transition-all ease-linear delay-300`}
        >
          <i className="fa-solid fa-chevron-left text-5xl"></i>
        </button>
        <button
          onClick={scrolRight}
          className={`absolute right-5 top-[35%] h-[100px] w-[45px] bg-white rounded hover:border-transparent flex items-center justify-center focus-visible:outline-none focus:outline-none  ${visible} transition-all ease-linear delay-300`}
        >
          <i className="fa-solid fa-chevron-right text-5xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
