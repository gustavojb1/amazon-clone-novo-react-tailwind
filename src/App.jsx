import "./App.css";
import Card from "./components/Card";
import Carroussel from "./components/Carroussel";
import logo from "./img/amazon_logo.png";
import livro1 from "./img/livro1.jpg";
import livro2 from "./img/livro2.jpg";
import livro3 from "./img/livro3.jpg";
import livro4 from "./img/livro4.jpg";
import frete_gratis from "./img/frete_gratis.jpg";
import prod1_1 from "./img/1_1.jpg";
import prod1_2 from "./img/1_2.jpg";
import prod1_3 from "./img/1_3.jpg";
import prod1_4 from "./img/1_4.jpg";


function App() {
  return (
    <div className="grid content-start h-screen w-screen overflow-y-auto items-start text-white bg-indigo-50 font-emberRegular">
      {/* HEADER SUPERIOR */}
      <div className="flex flex-wrap md:flex-nowrap bg-darkblue-700  md:bg-darkblue-900  px-2 pb-2 md:pt-1 md:px-3 items-center">
        <div className="py-1 px-2 mt-1 md:hidden">
          <i className="fa fa-bars text-2xl" />
        </div>
        {/* LOGO */}
        <div className="flex items-end mx-1 md:pt-2 md:pr-2 md:mb-1 border border-transparent hover:border-white">
          <img
            src={logo}
            alt="Amazon"
            className="h-6 md:h-8 mx-1 mt-3 md:mt-0"
          />
          <span className="text-sm pl-0.5 pb-1 md:pb-2">.com.br</span>
        </div>
        <div className="hidden md:flex px-2 py-2 border border-transparent hover:border-white text-xs items-end">
          <div className="pr-1 ">
            <i className="fa-solid fa-location-dot text-sm" />
          </div>
          <div>
            <p className="text-gray-200 font-emberLight">Olá</p>
            <p className="text-sm font-emberBold leading-3">
              Selecione o endereço
            </p>
          </div>
        </div>
        <div className="flex mt-3 md:mt-0 w-full md:w-auto flex-grow mx-2 md:mx-4  rounded-lg bg-white z-10  focus-within:ring focus-within:ring-orange-650">
          <form action="" className="flex flex-grow z-20 ">
            <select
              name=""
              id=""
              className="hidden md:block pl-2 z-40 text-xs text-black bg-gray-200 hover:bg-gray-300 rounded-tl-lg rounded-bl-lg border-r border-gray-300 focus:outline-none focus:ring focus:ring-orange-650 focus:border-r-transparent"
            >
              <option value="">Todos</option>
            </select>
            <input
              type="text"
              placeholder="Pesquisa na Amazon.com.br"
              className=" text-sm px-2 z-30 flex-grow rounded-l md:rounded-none bg-white text-gray-700 focus:outline-none"
            ></input>
            <button className="px-3 h-10 flex items-center  bg-gold-100 hover:bg-gold-200 md:rounded-none md:rounded-tr-lg md:rounded-br-lg focus:outline-none hover:border-transparent">
              <i className="fas fa-search text-darkblue-900 text-xl " />
            </button>
          </form>
        </div>
        <div className="hidden lg:block ml-1 text-sm border border-transparent hover:border-white rounded-sm p-2">
          <p className="leading-5">Olá, faça seu login</p>
          <p className="font-emberBold text-sm leading-3">
            Contas e Listas <i className="fas fa-chevron-down" />
          </p>
        </div>
        <div className="hidden md:block mx-3 text-sm border border-transparent hover:border-white rounded-sm p-2 pb3">
          <p className="leading-5">Devoluções </p>
          <p className="font-emberBold text-sm leading-3">e Pedidos</p>
        </div>
        <div className="md:hidden text-sm absolute right-16 top-4">
          <span className="leading-5 pr-1">Faça seu login</span>
          <i className="fa-solid fa-angle-right pr-2 text-xs"></i>
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="items-end p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:mt-0 md:relative order-1 md:order-none md:flex">
          <i className="fas fa-shopping-cart flex text-2xl md:mr-2" />
          <span className="bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4 text-center w-6 h-6 bg-darkblue-600 rounded-full">
            0
          </span>
          <span className="hidden md:flex font-emberBold text-sm pb-0.5">
            Carrinho
          </span>
        </div>
      </div>
      {/* HEADER INFERIOR */}
      <div className="flex bg-darkblue-700 text-sm px-2 py-3 items-center overflow-x-auto overflow-y-hidden h-11 -mt-1 no-scrollbar">
        <div className="p-0.5 pl-4 mt-1 hidden md:flex items-center">
          <i className="fa fa-bars text-2xl" />
          <span className="ml-2 mr-5 text-base font-emberBold">Todos</span>
        </div>
        <ul className="flex gap-6 text-base md:text-base whitespace-nowrap ml-2 md:ml-0">
          <li>Venda na Amazon</li>
          <li>Mais Vendidos</li>
          <li>Prime</li>
          <li>Ofertas do Dia</li>
          <li>Novidades na Amazon</li>
          <li>Música</li>
          <li>Livros</li>
          <li>eBook Kindle</li>
          <li>Atendimento ao Cliente</li>
          <li>Eletrônicos</li>
          <li>Computadores</li>
          <li>Ideias de Presente</li>
          <li>Games</li>
          <li>Casa</li>
          <li>Cuidados Pessoais</li>
        </ul>
      </div>
      <div className="md:hidden bg-darkblue-600 pt-2 pb-3 pl-4">
        <i className="fa-solid fa-location-dot text-sm pr-2" />
        <span className="text-xs mr-1">Enviar para Lavras 37200000</span>
        <i className="fa-solid fa-chevron-down text-xs"></i>
      </div>
      <main className="w-screen md:min-w-[1010px] md:max-w-[1700px] mx-auto border border-black">
        <Carroussel/>
        
        <div className="mt-[-22%] px-10 flex gap-x-5">
          <Card
          images={[livro1, livro2, livro3, livro4]}
          description={
            ['Trabalhe 4 horas por semana ',
            'O poder da ação',
            'Desconstruindo a ansiedade',
            'Fahrenheit 451',
            'Continue de onde parou'
            ]
          }
          />
          <Card
          images={[frete_gratis]}
          description={
            ['Frete GRÁTIS no seu primeiro pedido',
            'Saiba como aproveitar'
            ]
          }
          />
          <Card
          images={[prod1_1,prod1_2,prod1_3,prod1_4]}
          description={
            ['Ofertas recomendadas para você',
            'Ver todas as ofertas'
            ]
          }
          />
          <div className="xl:flex hidden z-20 w-full">
          <Card
          images={[]}
          description={
            ['Conheça Alexa',
            'Alexa torna sua vida mais fácil, conveniente e divertida, transformando seu dia a dia.',
            'Descubra tudo que Alexa pode fazer'
            ]
          }

          />
          </div>
         
          
        </div>
        
        
      </main>

      {/* md:min-w-1010px md:max-w-[1500px] mx-auto */}

    </div>
  );
}

export default App;
