import React from "react";
import instructorImg from "../../assets/img/lp1edit2.png";
import profileImg from "../../assets/img/lp2.png";
import codeImg from "../../assets/img/lp3.jpeg";
import laptopEd from "../../assets/img/lp4.png";
import { Field, Form, Formik } from "formik";
import { registerSchema } from "../../helpers/schemas/schema";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

export const Home = () => {
  const navigate = useNavigate();
  type TVal = {
    name: string;
    email: string;
  };
  const handleSubmit = async (name: string, email: string) => {
    try {
      api.post("/users", {
        name: name,
        email: email,
      });
      toast.success('Parabéns! Você está inscrito agora.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      navigate("/thank-you");
    } catch (Error: any) {
      toast.error('Um erro aconteceu. Tente novamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#1A142A] to-[#271415]">
      <h1 className="text-3xl font-monospace text-white text-center text-lg">
        Método LoveProgramming
      </h1>
      <div className="bg-gradient-to-r from-[#1A142A] to-[#271415]">
        <img
          src={instructorImg}
          alt="Imagem da instrutora"
          className="w-56 h-56 flex-row box-border flex-wrap float-right rounded-full"
        />
        <div className="text-white text-5xl leading-loose pl-10 tracking-widest font-clear-sans-thin">
          {" "}
          MASTERCLASS{" "}
        </div>
        <div className="text-white pl-10 text-xs m-0 p-0 font-advent-pro">
          {" "}
          Evento online e gratuito no dia 07 de abril, às 20h30.{" "}
        </div>
        <div className="text-white pt-10 pl-10 font-advent-pro">
          {" "}
          Dê o start na sua jornada na programação.{" "}
        </div>
        <div className="text-white pl-10 font-advent-pro">
          {" "}
          Aprenda programação e consiga seu 1º emprego <br /> em 3 meses.{" "}
        </div>
        <span className="text-white text-3xl font-clear-sans-thin pl-10 pt-10 flex">
          Garanta sua vaga agora!
        </span>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => handleSubmit(values.name, values.email)}
          validationSchema={registerSchema}
        >
          {({ values, errors, handleChange, touched }) => {
            return (
              <Form autoComplete="off">
                <label
                  htmlFor="name"
                  className="text-white font-clear-sans-thin pl-10"
                >
                  Digite seu nome:
                </label>
                <input
                  value={values.name}
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Seu nome..."
                  className="flex flex-col ml-10 pl-2 outline-0 rounded-sm w-72 font-clear-sans-thin  leading-8"
                />
                <span className="mt-2 text-red-300 pl-10 font-clear-sans-thin">
                  {" "}
                  {!!touched.name && errors.name}
                  {!!errors.name && touched.name}
                </span>
                <label
                  htmlFor="email"
                  className="text-white font-clear-sans-thin pl-10 mt-5 pt-2 relative flex"
                >
                  {" "}
                  Digite seu melhor email:{" "}
                </label>
                <input
                  value={values.email}
                  name="email"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Seu melhor email..."
                  className="flex flex-col ml-10 pl-2 outline-0 rounded-sm font-clear-sans-thin w-72 leading-8"
                />
                <span className="mt-2 text-red-300 pl-10 font-clear-sans-thin">
                  {" "}
                  {!!touched.email && errors.email}
                  {!!errors.email && touched.email}
                </span>
                <button
                  type="submit"
                  className="bg-white text-dark-purple ml-20 mt-5 flex rounded-md border-[#271415] border-2 p-1 font-advent-pro text-lg"
                >
                  Quero garantir minha vaga!
                </button>
              </Form>
            );
          }}
        </Formik>
        <div>
          <img
            src={profileImg}
            alt="Foto da instrutora de perfil"
            className="w-52 h-56 flex-row box-border flex-wrap absolute mt-9"
          />

          <h3 className="divide-white text-white font-clear-sans-thin font-thin text-3xl text-center relative">
            {" "}
            Conheça sua instrutora
          </h3>
          <p className="text-white font-clear-sans-thin font-thin text-center pl-48 mt-8">
            Filha do escritor Lord Byron e da matemática Lady Byron, condessa
            Ada foi a primeira programadora do mundo.
          </p>
          <p className="text-white font-clear-sans-thin font-thin text-center pl-48">
            Reconheceu as aplicações da máquina de Babbage para além dos
            cálculos e escreveu o primeiro algoritmo a ser carregado pela
            máquina.
          </p>
          <p className="text-white font-clear-sans-thin font-thin text-center pl-48">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, sit sint necessitatibus aliquid, voluptatem doloremque
            nam vel sequi excepturi neque asperiores nemo qui quia autem esse
            natus impedit. Beatae, minima.
          </p>
        </div>
        <div className="pt-24">
          <hr className="bg-white" />

          <h4 className="divide-white text-white font-clear-sans-thin font-thin text-3xl text-center relative">
            Ao final do curso você será capaz de:
          </h4>
          <img
            src={laptopEd}
            alt="Laptop com executiva ao centro"
            className="w-68 h-60 flex-row box-border flex-wrap absolute mt-4"
          />
          <ul className="text-center text-white font-advent-pro p-8 text-2xl">
            <li className="p-2"> Criar suas primeiras páginas</li>
            <li className="p-2"> Onde achar os primeiros jobs</li>
            <li className="p-2">A importância do networking </li>
            <li className="p-2">Como progredir na carreira</li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src={codeImg}
          alt="Código numa tela de desktop"
          className="w-44 h-32 flex-row box-border flex-wrap object-fit absolute rounded-r-lg"
        />
        <p className="text-white font-clear-sans-thin font-thin text-3xl text-center">
          Ingresse de uma vez por todas no mercado que mais cresce no mundo.
        </p>
        <p className="text-white font-clear-sans-thin font-thin text-center text-lg">
          Com o Método LoveProgramming você conquistará sua 1ª vaga na área de
          tecnologia em tempo recorde.
        </p>
        <div className="mt-12">⠀</div>
      </div>
    </div>
  );
};
