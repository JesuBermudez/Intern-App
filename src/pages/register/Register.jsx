import logo from "../../assets/logo.svg";
import Button from "../../components/ui/Button";
const Register = () => {
  const params = {
    text: "Continuar",
    onClick: () => console.log("click en registrar"),
    styles:
      "bg-transparent p-2 hover:bg-primary hover:text-accent rounded-full border border-primary text-primary w-full",
  };
  return (
    <section className=" h-screen  flex flex-col justify-center items-center">
      <div className="flex gap-14 flex-col items-center  w-[50vh]">
        <div className="flex items-center flex-col">
          <img src={logo} className="w-[10vh]" alt="logo" />
          <h2 className="font-bold text-[28px]">Crear cuenta</h2>
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
        <Button params={params}></Button>
        <span className="text-center">Ya tiene una cuenta?
          <br />
          haz Click 
          <a className="text-primary" > aqui</a>
        </span>
      </div>
    </section>
  );
};

export default Register;
