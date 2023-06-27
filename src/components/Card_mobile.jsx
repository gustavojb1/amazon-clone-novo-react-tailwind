// import React from 'react'

const Card_mobile = ({ items, description_card }) => {
  if (items.length === 1) {
    return (
      <div className="flex md:hidden flex-col bg-white text-black font-emberBold text-lg mb-1">
        <div className="px-4 py-3">
          {description_card[0]}
          <img src={items[0].image} alt="" className="mt-2 rounded" />
        </div>
      </div>
    );
  } else if (items.length === 4) {
    return (
      <div className="flex md:hidden flex-col bg-white text-black font-emberBold text-lg mb-1">
        <div className="px-4 py-3">
          {description_card[0]}
          <div className="grid grid-cols-2 gap-y-5 pt-2">
            {items?.map((item, index) => {
              let centavos;
              let inteiro;
              if (item.price) {
                inteiro = item.price.split(".")[0];
                centavos = item.price.split(".")[1];
              }

              return (
                <div key={index} className="px-1 row-span-1 ">
                  <div
                    className="w-full flex items-center justify-center bg-gray-100 rounded py-2"
                    key={index}
                  >
                    <img
                      src={item.image}
                      className="h-[180px] rounded "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-sm font-emberRegular">
                    <p className="">{item.description}</p>
                    {item.price ? (
                      <div className="flex items-start h-6 ">
                        <div>R$ {inteiro}</div>
                        <div className="text-[10px] mt-[-3px] ml-[1px]">
                          {centavos}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          {description_card[1] ? <div className="text-sky-700 text-sm pl-1 font-emberRegular mt-1" >{description_card[1]}</div> : null}
        </div>
      </div>
    );
  }
};

export default Card_mobile;
