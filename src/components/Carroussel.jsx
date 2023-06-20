// import React from 'react'
import img1 from "../img/carroussel/1.jpg";
import img2 from "../img/carroussel/2.jpg";
import img3 from "../img/carroussel/3.jpg";
import img4 from "../img/carroussel/4.jpg";
import img5 from "../img/carroussel/5.jpg";

const Carroussel = () => {
  let count = 0;
  let position = 1;

  const scrolLeft = () => {
    if (position == 1) {
      if (count == 0) {
        count = 1;
        let carousel = document.getElementById("teste");
        let width = carousel.offsetWidth;
        carousel.scrollLeft += width * 4;
        position = 5;
        setTimeout(function () {
          console.log("entrou");
          count = 0;
        }, 1000);
      }
    } else {
      if (count == 0) {
        position--;
        count = 1;
        let carousel = document.getElementById("teste");
        let width = carousel.offsetWidth;
        carousel.scrollLeft -= width;
        setTimeout(function () {
          console.log("entrou");
          count = 0;
        }, 1000);
      }
    }
  };

  const scrolRight = () => {
    if (position == 5) {
      if (count == 0) {
        let carousel = document.getElementById("teste");
        let width = carousel.offsetWidth;
        carousel.scrollLeft -= width * 4;
        position = 1;
        count = 1;
        setTimeout(function () {
          console.log("entrou");
          count = 0;
        }, 1000);
      }
    } else {
      if (count == 0) {
        position++;
        count = 1;
        let carousel = document.getElementById("teste");
        let width = carousel.offsetWidth;
        carousel.scrollLeft += width;
        setTimeout(function () {
          console.log("entrou");
          count = 0;
        }, 1000);
      }
    }
  };

  return (
    <div className="relative ">
      <div
        id="teste"
        className=" text-black carousel flex items-center justify-start overflow-x-scroll no-scrollbar scroll-smooth relative"
      >
        <img src={img1} alt="" className="w-full" />
        <img src={img2} alt="" className="w-full" />
        <img src={img3} alt="" className="w-full" />
        <img src={img4} alt="" className="w-full" />
        <img src={img5} alt="" className="w-full" />
      </div>
      <button
        onClick={scrolLeft}
        className="absolute  left-0 top-0 h-60 w-20 bg-transparent rounded hover:border-transparent"
      >
        <i className="fa-solid fa-chevron-left text-5xl"></i>
      </button>
      <button
        onClick={scrolRight}
        className="absolute right-0 top-0 h-60 w-20 bg-transparent rounded hover:border-transparent "
      >
        <i className="fa-solid fa-chevron-right text-5xl"></i>
      </button>
    </div>
  );
};

export default Carroussel;
