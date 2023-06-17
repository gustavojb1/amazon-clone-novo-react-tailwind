import "./App.css";
import logo from './img/amazon_logo.png'

function App() {


  return (
    <div className="grid h-screen w-screen overflow-y-auto items-start text-white bg-indigo-50 font-emberRegular">
      {/* HEADER SUPERIOR */}
      <div className="flex flex-wrap md:flex-nowrap bg-darkblue-700  md:bg-darkblue-900  px-2 pb-2 md:pt-0.5 md:px-3 items-center">
        <div className="py-1 px-2 mt-1 md:hidden">
          <i className="fa fa-bars text-2xl"></i>
        </div>
        {/* LOGO */}
        <div className="flex items-end mx-1 md:pt-2 md:pr-2 md:mb-1 border border-transparent hover:border-white">
          <img src={logo} alt="Amazon" className="h-6 md:h-7 mx-1 mt-3 md:mt-0"/>
          <span className="text-sm pl-1 pb-1 md:pb-2">.com.br</span>
        </div>
        <div className="hidden md:flex px-2 py-2 border border-transparent hover:border-white text-xs items-end">
          <div className="pr-1 ">
            <i className="fa-solid fa-location-dot text-sm"></i>  
          </div>
          <div>
            <p className="text-gray-200 font-emberLight">Enviar para Gustavo</p>
            <p className="text-sm font-emberBold leading-3">Lavras 37200366</p>
          </div>
        </div>
        <div className="flex mt-3 md:mt-0 w-full md:w-auto flex-grow mx-1 md:mx-4  rounded-lg bg-white z-10  focus-within:ring focus-within:ring-orange-650">
          <form action="" className="flex flex-grow z-20 ">
              <select name="" id="" className="hidden md:block pl-2 z-40 text-xs text-black bg-gray-200 hover:bg-gray-300 rounded-tl-lg rounded-bl-lg border-r border-gray-300 focus:outline-none focus:ring focus:ring-orange-650 focus:border-r-transparent">
                <option value="">Todos</option>
              </select>          
              <input type="text" placeholder="Pesquisa na Amazon.com.br" className=" text-sm px-2 z-30 flex-grow rounded-l md:rounded-none bg-white text-gray-700 focus:outline-none"></input>
              <button className="px-3 h-10 flex items-center  bg-gold-100 hover:bg-gold-200 md:rounded-none md:rounded-tr-lg md:rounded-br-lg focus:outline-none hover:border-transparent">
                <i className="fas fa-search text-darkblue-900 text-xl "></i>
              </button>
          </form>
        </div>
        <div className="hidden z-10 lg:block ml-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
          <p className="leading-3">Olá, Gustavo</p>
          <p className="font-emberBold text-sm leading-3">Contas e Listas <i className="fas fa-chevron-down"></i></p>
        </div>
        <div className="hidden md:block ml text-xs border border-transparent hover:border-white rounded-sm p-2 pb3">
          <p className="leading-3">Devoluções </p>
          <p className="font-emberBold text-sm leading-3">e Pedidos</p>
        </div>
        <div className="items-end p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:t-0 md:relative order-1 md:order-none md:flex">
          <i className="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
          <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">0</span>
          <span className="hidden md:flex font-emberBold text-sm pb-0.5">Carrinho</span>
        </div>
      </div>
    </div>
  
  );
}

export default App;
