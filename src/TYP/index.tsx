import React from "react";
import sucess from "../assets/img/icons/FILHODAPUTA.svg";
import facebook from "../assets/img/icons/facebook.png";
import instagram from "../assets/img/icons/instagram.png";
import linkedin from "../assets/img/icons/linkedin.png";
import home from "../assets/img/icons/casinhadocaralho.png";
import { Link } from "react-router-dom";

export const TYP = () => {
  return (
    <div className="bg-white flex flex-col content-center mt-10 justify-center items-center">
      <img
        src={sucess}
        alt="Check verde de sucesso"
        className="flex  self-center justify-self-auto object-cover relative flex-row"
      />
      <h1 className="text-black font-bold font-clear-sans-thin text-4xl flex flex-row">
        Obrigado por se cadastrar!
      </h1>
      <span className="font-clear-sans-thin text-lg mt-5">
        {" "}
        Você receberá um email de confirmação em breve. Certifique de se
        favoritá-lo para receber as novidades.
      </span>
      <div className="float-left relative flex flex-start">
        <Link
          to="/"
        >
          <span
          className="float-left relative flex flex-start mt-8 font-advent-pro text-2xl mr-5 pt-10"> Retornar à home</span>
          <img
            src={home}
            alt="Imagem de uma casa - homepage"
            className="w-12 h-12 ml-6 mt-16 flex"
          />{" "}
        </Link>
      </div>
      <div className="">
        <div className="flex flex-row font-advent-pro text-2xl mt-8 justify-between p-10 fixed">
          Para mais conteúdo, <br /> consulte nossas redes sociais:
          <img
            src={facebook}
            className="w-16 h-16 flex flex-row justify-between m-5 object-cover"
            alt="Ícone do Facebook"
          />
          <img
            src={instagram}
            className="w-16 h-16 flex flex-row justify-between m-5"
            alt="Ícone do Instagram"
          />
          <img
            src={linkedin}
            className="w-16 h-16 flex flex-row justify-between m-5"
            alt="Ícone do LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};
