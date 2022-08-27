import React from "react";
import sadDove from '../../assets/img/sadDove.jpg'

export const NotFound = () => {
  return (
    <div className="bg-white content-center relative flex flex-col">
      <span className="text-black content-center font-clear-sans-thin underline text-4xl text-center flex flex-col mt-28">
        Erro 404.
      </span>
      <>
      <span className="mt-10 text-black content-center font-clear-sans-thin text-4xl text-center flex flex-col">
        Lamentamos, mas essa página não foi encontrada.
      </span></>
      <img src={sadDove} alt="Pomba triste e cabisbaixa (meme)" className="w-32 h-32 flex content-center justify-center items-center self-center rounded-sm justify-self-auto m-0-auto object-cover m-10" />
    </div>
  );
};
