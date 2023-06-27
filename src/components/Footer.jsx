// import React from "react";
import brasil from "../img/mobile/brasil.png";
import logo from "../img/amazon_logo.png";


const Footer = () => {
  return (
    <footer className="bg-darkblue-700 md:mt-6">
      {/* Login */}
      <div className="bg-white pt-10 pb-5 hidden md:block">
        <div className="rounded border border-gray-300 pt-10 pb-5 flex flex-col items-center justify-center text-black text-sm">
          Veja recomendações personalizadas
          <button className="bg-gradient-to-t from-[#f8b918] to-[#FFD772] to-80% px-20 font-emberBold leading-3 rounded focus-visible:outline-none focus:outline-none border border-orange-650 hover:border-orange-650 my-1">
            Faça seu login
          </button>
          <span className="text-xs">
            Cliente novo?{" "}
            <span className="text-sky-600 cursor-pointer hover:text-orange-650">
              Comece aqui
            </span>
            .{" "}
          </span>
        </div>
      </div>
      {/* Voltar ao início */}
      <div className="hidden md:flex py-3  justify-center text-sm hover:bg-darkblue-500 bg-darkblue-600">
        Voltar ao início
      </div>
      {/* Menus */}
      <div className="hidden md:grid w-[1000px] mx-auto grid-cols-4 py-16 ">
        <div className="flex flex-col">
          Conheça-nos
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2 pt-4"
          >
            <p>Informações</p> corporativas
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Carreiras
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            <p>Comunicados à </p>imprensa
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Comunidade
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Acessibilidade
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Amazon Science
          </a>
        </div>
        <div className="flex flex-col">
          Ganhe dinheiro conosco
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2 pt-4"
          >
            Venda na Amazon
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            <p>Proteja e construa a sua </p> marca
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Publique seus livros
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Seja um associado
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Anuncie seus produtos
          </a>
        </div>
        <div className="flex flex-col pl-10">
          Pagamento
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2 pt-4"
          >
            <p>Meios de </p> Pagamento
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            <p>Compre com </p> Pontos
          </a>
        </div>
        <div className="flex flex-col">
          Deixe-nos ajudar você
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2 pt-4"
          >
            Amazon e COVID-19
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Sua conta
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Frete e prazo de entrega
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Devoluções e reembolsos
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            <p>Gerencie seu conteúdo e </p> dispositivos
          </a>
          <a
            href="#"
            className="text-white text-sm font-emberLight hover:text-white hover:underline pb-2"
          >
            Ajuda
          </a>
        </div>
      </div>
      {/* Países */}
      <div className="pt-8 pb-3 text-sm md:flex hidden flex-col items-center border-t border-t-gray-600  ">
        <img src={logo} alt="" className="w-20" />
        <ul className="flex flex-wrap justify-center text-xs pt-4 text-gray-400 ">
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Austrália
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Alemanha
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Canadá
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              China
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Cingapura
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Espanha
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Estados Unidos
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              França
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Holanda
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Índia
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Itália
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Japão
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              México
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Emirados Árabes Unidos
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center text-xs mt-1 text-gray-400 ">
          <li className="px-2 border-l border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Reino Unido
            </a>
          </li>
          <li className="px-2 border-l border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Turquia
            </a>
          </li>
        </ul>
        <p className="text-xs mt-2">E não se esqueça:</p>
        <a
          href="#"
          className="text-xs pl-4 text-white hover:text-white hover:underline"
        >
          Amazon Web Services
        </a>
      </div>
      {/* Ultima linha */}
      <div className="pt-3 md:flex hidden flex-col bg-darkblue-950 items-center">
        <ul className="flex flex-wrap justify-center text-xs mt-1 text-gray-400 ">
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Condições de uso
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Notificação de privacidade
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Cookies
            </a>
          </li>
          <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#" className="text-white hover:text-white">
              Anúncios baseados em Interesses
            </a>
          </li>
        </ul>
        <p className="text-xs mt-1">
          © 2021-2023 Amazon.com, Inc. ou suas afiliadas
        </p>
        <p className="text-xs mt-10 text-gray-400">
          Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03
        </p>
        <p className="text-xs mt-10 text-gray-400">
          Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP:
          04543-011|
          <span className="text-white px-3 hover:underline cursor-pointer">
            Fale conosco
          </span>
          | ajuda-amazon@amazon.com.br
        </p>
        <p className="text-xs my-10 text-gray-400">
          Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo
          e American Express), cartões de débito (Visa e Elo), Boleto e Pix.
        </p>
      </div>
      {/* MOBILE */}
      <div className="flex md:hidden flex-col items-center py-3  bg-darkblue-500 text-xs">
        <i className="fa-solid fa-caret-up"></i>
        VOLTAR AO TOPO DA PÁGINA
      </div>
      <div className="grid md:hidden grid-cols-2 py-7 pl-4 leading-5">
        <div className="flex flex-col gap-y-5">
          <a href="" className="text-white ">
            {" "}
            Sua Amazon
          </a>
          <a href="" className="text-white ">
            {" "}
            Seus produtos do Programe e Poupe
          </a>
          <a href="" className="text-white ">
            {" "}
            Encontre uma lista de desejos ou registro
          </a>
          <a href="" className="text-white ">
            {" "}
            Seus itens visto recentemente
          </a>
          <a href="" className="text-white ">
            {" "}
            Configurações de 1-Clique
          </a>
          <a href="" className="text-white ">
            {" "}
            Atendimento ao cliente
          </a>
        </div>
        <div className="flex flex-col gap-y-5">
          <a href="" className="text-white ">
            {" "}
            Seus pedidos
          </a>
          <a href="" className="text-white ">
            {" "}
            Suas Listas
          </a>
          <a href="" className="text-white ">
            {" "}
            Sua conta
          </a>
          <a href="" className="text-white ">
            {" "}
            Devoluções
          </a>
          <a href="" className="text-white ">
            {" "}
            Crédito e Produtos de Pagamento
          </a>
          <a href="" className="text-white ">
            {" "}
            Venda na Amazon
          </a>
        </div>
      </div>
      <div className="py-10 flex md:hidden flex-col items-center bg-darkblue-900 text-gray-300 text-sm">
        <div className="flex items-center">
          <div className="mr-7">
            <i className="fa-solid fa-globe mr-2"></i>
            Português
          </div>
          <div className="flex items-center">
            <img src={brasil} alt="" className="h-3 mr-2" />
            Brasil
          </div>
        </div>
        <div className="mt-8 mb-5 text-base text-white">
          Já é um cliente? Faça seu login
        </div>
        <div className="flex gap-x-4">
          <a href="#" className="text-gray-300 text-xs">
            Cookies
          </a>
          <a href="#" className="text-gray-300 text-xs">
            {" "}
            Condições de Uso
          </a>
          <a href="#" className="text-gray-300 text-xs">
            Aviso de Privacidade
          </a>
        </div>
        <div className="text-xs mt-2">
          © 1996-2023 Amazon.com, Inc. ou suas afiliadas
        </div>
      </div>
    </footer>
  );
};

export default Footer;
