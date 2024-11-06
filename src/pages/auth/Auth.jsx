import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Button1 from "../../components/ui/Button1";
import { getClientIp } from "../../services/ip";
import IpPopUp from "../../components/ui/IpPopUp";
import useStore from "../../store/state";
import { useNavigate } from "react-router-dom";
import registerService from "../../services/register";
import loginService from "../../services/login";
const Auth = ({ type }) => {
  const [inputText, setInputText] = useState("");
  const [username, setUsername] = useState("");
  const [confirmIp, setConfirmIp] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);
  const navigator = useNavigate();

  const handleLogin = async () => {
    const ip = await getClientIp();
    const res = await loginService({
      username: username,
      ip: ip,
      recoveryKey: inputText,
    });
    setUser(res.user);
    localStorage.setItem("userInfo", JSON.stringify(res.user));
    navigator("/main");
  };
  const params = {
    onClick: () => {
      type == "register" ? setShowPopUp(true) : handleLogin();
    },
    text: "Continuar",
  };
  useEffect(() => {}, [showPopUp]);

  const onConfirm = () => {
    setShowPopUp(false);
    setConfirmIp(true);
    handleRegister();
  };

  const onCancel = () => {
    setShowPopUp(false);
    alert("Si no permite el uso de su Ip, no podra crear su cuenta.");
  };

  async function handleRegister() {
    try {
      const ip = await getClientIp();
      const response = await registerService({ username: inputText, ip: ip });
      
      if (response.user !== null) {
        setUser(response.user);
        localStorage.setItem("userInfo", JSON.stringify(response.user));
        navigator("/main");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
            {type === "login" ? (
              <div className="flex  w-full flex-col gap-2">
                <label htmlFor="">Username</label>
                <input
                  className="border w-[21rem] lg:w-[28rem] border-secondary p-2 rounded-lg bg-transparent outline-none"
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
            ) : (
              ""
            )}
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
              value={inputText}
              onChange={(e) => {
                let value = e.target.value;
                if (type === "register") {
                  value = value.replace(/[^a-zA-Z]/g, "");
                }
                setInputText(value);
              }}
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
      {showPopUp && <IpPopUp onConfirm={onConfirm} onCancel={onCancel} />}
    </>
  );
};

export default Auth;
