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
import ofertas_do_dia from "./img/ofertas_do_dia.jpg";
import echo_pop from "./img/echo_pop.jpg";
import echo_dot from "./img/echo_dot.jpg";
import fire_tv from "./img/fire_tv.jpg";
import echo_dot_4 from "./img/echo_dot_4.jpg";
import Card_mobile_little from "./components/Card_mobile_little";
import card_mobile_1 from "./img/card_mobile_1.jpg";
import card_mobile_2 from "./img/card_mobile_2.jpg";
import card_mobile_3 from "./img/card_mobile_3.jpg";
import card_mobile_4 from "./img/card_mobile_4.jpg";
import card_mobile_5 from "./img/card_mobile_5.jpg";
import card_mobile_6 from "./img/card_mobile_6.jpg";
import card_mobile_7 from "./img/card_mobile_7.jpg";
import card_mobile_8 from "./img/card_mobile_8.jpg";
import card_mobile_9 from "./img/card_mobile_9.jpg";
import card_mobile_10 from "./img/card_mobile_10.jfif";
import banner_mobile from "./img/banner_mobile.jpg";
import banner_mobile_prime from "./img/banner_mobile_prime.jpg";
import Slider from "./components/Slider";
import categories1 from "./img/categories/1.jpg";
import categories2 from "./img/categories/2.jpg";
import categories3 from "./img/categories/3.jpg";
import categories4 from "./img/categories/4.jpg";
import categories5 from "./img/categories/5.jpg";
import categories6 from "./img/categories/6.jpg";
import categories7 from "./img/categories/7.jpg";
import categories8 from "./img/categories/8.jpg";
import categories9 from "./img/categories/9.jpg";
import categories10 from "./img/categories/10.jpg";
import categories11 from "./img/categories/11.jpg";
import categories12 from "./img/categories/12.jpg";
import categories13 from "./img/categories/13.jpg";
import categories14 from "./img/categories/14.jpg";
import categories15 from "./img/categories/15.jpg";
import categories16 from "./img/categories/16.jpg";
import categories17 from "./img/categories/17.jpg";
import categories18 from "./img/categories/18.jpg";
import categories19 from "./img/categories/19.jpg";
import categories20 from "./img/categories/20.jpg";
import categories21 from "./img/categories/21.jpg";
import categories22 from "./img/categories/22.jpg";
import kindle_1 from "./img/produtos/mais_vendidos_kindle/001.jpg";

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
      {/* PRINCIPAL */}
      <main className="flex flex-col gap-y-6 w-screen md:min-w-[1010px] md:max-w-[1500px] mx-auto">
        <Carroussel />
        {/* PRIMEIRA LINHA */}
        <div className="hidden mt-[-22%] px-8 md:grid xl:grid-cols-4 grid-cols-3 gap-x-5">
          <Card
            images={[livro1, livro2, livro3, livro4]}
            description={[
              "Trabalhe 4 horas por semana ",
              "O poder da ação",
              "Desconstruindo a ansiedade",
              "Fahrenheit 451",
              "Continue de onde parou",
            ]}
          />
          <Card
            images={[frete_gratis]}
            description={[
              "Frete GRÁTIS no seu primeiro pedido",
              "Saiba como aproveitar",
            ]}
          />
          <Card
            images={[prod1_1, prod1_2, prod1_3, prod1_4]}
            description={[
              "Ofertas recomendadas para você",
              "Ver todas as ofertas",
            ]}
          />
          <div className="xl:flex hidden z-20 w-full">
            <Card
              images={[]}
              description={[
                "Conheça Alexa",
                "Alexa torna sua vida mais fácil, conveniente e divertida, transformando seu dia a dia.",
                "Descubra tudo que Alexa pode fazer",
              ]}
            />
          </div>
        </div>
        {/* SEGUNDA LINHA */}
        <div className="hidden md:grid xl:grid-cols-4 grid-cols-3 px-8 gap-x-5 h-[420px]">
          <div className="bg-[url('./img/air.jpg')] filme bg-center  col-span-2 flex flex-col items-start pt-7 pl-5 pb-3">
            <p className="font-emberBold text-xl">
              Prime Video: Recomendado para você
            </p>
            <p className="h-full">AIR: a história por tras do logo</p>
            <p className="text-xs">Assista agora no Prime Video</p>
          </div>
          <div className="hidden xl:block">
            <Card
              images={[ofertas_do_dia]}
              description={["Ofertas do Dia", "Ver todas as ofertas"]}
            />
          </div>
          <div className="hidden xl:block h-full">
            <Card
              images={[echo_pop, echo_dot, fire_tv, echo_dot_4]}
              description={[
                "Novo Echo Pop ",
                "Echo Dot 3ª geração",
                "Fire TV Stick Lite",
                "Echo Dot com Relógio 4ª Ger.",
                "Echo e Fire TV com Alexa",
                "Confira todos os Dispositivos Amazon",
              ]}
            />
          </div>
          <div className="block xl:hidden h-full">
            <Card
              images={[]}
              description={[
                "Conheça Alexa",
                "Alexa torna sua vida mais fácil, conveniente e divertida, transformando seu dia a dia.",
                "Descubra tudo que Alexa pode fazer",
              ]}
            />
          </div>
        </div>
        {/* Mobile */}
        <div className="flex gap-x-2 md:hidden mt-[-120px] z-20 px-2 overflow-x-auto overflow-y-visible">
          <Card_mobile_little
            text={"Continue comprando"}
            image={card_mobile_1}
          />
          <Card_mobile_little
            text={"Continuar navegando"}
            image={card_mobile_2}
          />
          <Card_mobile_little text={[]} image={card_mobile_3} />
          <Card_mobile_little text={[]} image={card_mobile_4} />
          <Card_mobile_little text={[]} image={card_mobile_5} />
          <Card_mobile_little text={[]} image={card_mobile_6} />
          <Card_mobile_little text={[]} image={card_mobile_7} />
          <Card_mobile_little text={[]} image={card_mobile_8} />
          <Card_mobile_little text={[]} image={card_mobile_9} />
          <Card_mobile_little text={[]} image={card_mobile_10} />
        </div>
        <div className="block md:hidden mt-[-15px]">
          <img src={banner_mobile} alt="" />
        </div>
        <div className="block md:hidden mt-[-20px]">
          <img src={banner_mobile_prime} alt="" />
        </div>

        <Slider
          images={[
            categories1,
            categories2,
            categories3,
            categories4,
            categories5,
            categories6,
            categories7,
            categories8,
            categories9,
            categories10,
            categories11,
            categories12,
            categories13,
            categories14,
            categories15,
            categories16,
            categories17,
            categories18,
            categories19,
            categories20,
            categories21,
            categories22,
          ]}
          tittle={"Navegue por categoria"}
        />
        <Slider
          images={[
            kindle_1
          ]}
          tittle={"Mais Vendidos em Loja Kindle"}
        />
        
      </main>
    </div>
  );
}

export default App;
