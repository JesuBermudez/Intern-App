import { useState } from "react";
import logo from "../../assets/logo.svg";
import Button1 from "../../components/ui/Button1";
import { getClientIp } from "../../services/ip";
const Auth = ({ type }) => {
  const [inputText, setInputText] = useState("");
  console.log("ip");
  const onClick = async () => {
    await getClientIp();
  };
  const params = {
    text: "Continuar",
    onClick,
  };
  return (
    <section className=" h-screen  flex flex-col justify-center items-center">
      <div className="flex gap-14 flex-col items-center  ">
        <div className="flex items-center flex-col">
          <img src={logo} className="size-12" alt="logo" />
          <h2 className=" text-2xl font-semibold">
            {" "}
            {type === "login" ? "Iniciar sesion" : "Crear cuenta"}
          </h2>
        </div>
        <div className="flex  w-full flex-col gap-2">
          <label htmlFor="" className="">
            {type === "login" ? "Clave de cuenta" : "Nombre de usuario"}
          </label>
          <input
            className="border w-[21rem] lg:w-[28rem] border-secondary p-2 rounded-lg bg-transparent outline-none"
            type={type === "login" ? "password" : "text"}
            placeholder={
              type === "login"
                ? "Ingrese su clave"
                : "Ingrese su nombre de usuario"
            }
            onChange={(e) => setInputText(e.target.value)}
          ></input>
        </div>
        <Button1 params={params}></Button1>
        <span className="text-center">
          {type === "login"
            ? "Aun no tienes una cuenta?"
            : "Ya tiene una cuenta?"}
          <br />
          haz Click
          <a
            href={type === "login" ? "/register" : "/login"}
            className="text-primary"
          >
            {" "}
            aqui
          </a>
        </span>
      </div>
    </section>
  );
};

export default Auth;
