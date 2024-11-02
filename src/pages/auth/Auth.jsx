import logo from "../../assets/logo.svg";
import Button1 from "../../components/ui/Button1";
const Auth = (type = "") => {
  const params = {
    text: "Continuar",
    onClick: () => console.log("click en registrar"),
  };

  return (
    <section className=" h-screen  flex flex-col justify-center items-center">
      <div className="flex gap-14 flex-col items-center  w-[50vh]">
        <div className="flex items-center flex-col">
          <img src={logo} className="size-12" alt="logo" />
          <h2 className="font-bold text-2xl font-semibold">Crear cuenta</h2>
        </div>
        <div className="flex  w-full flex-col gap-2">
          <label htmlFor="" className="">
            Nombre de usuario{" "}
          </label>
          <input
            className="border w-full border-secondary p-2 rounded-lg bg-transparent outline-none"
            type="text"
            placeholder="Ingrese su nombre de usuario"
          ></input>
        </div>
        <Button1 params={params}></Button1>
        <span className="text-center">
          Ya tiene una cuenta?
          <br />
          haz Click
          <a className="text-primary"> aqui</a>
        </span>
      </div>
    </section>
  );
};

export default Auth;