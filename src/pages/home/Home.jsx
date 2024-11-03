import logo from "../../assets/logo.svg";
import HomeIcons from "../../assets/HomeIcons.svg";
import Button1 from "../../components/ui/Button1";
import Button2 from "../../components/ui/Button2";

export default function Home() {
  const buttonParams1 = {
    onClick: () => {
      window.location.href = "/login";
    },
    text: "Iniciar Sesion",
  };

  const buttonParams2 = {
    onClick: () => {
      window.location.href = "/register";
    },
    text: "Crear Cuenta",
  };

  return (
    <div className="bg-accent w-full h-screen py-8 flex flex-col items-center justify-between">
      <section className="mt-10">
        <img src={logo} alt="Intern Logo" className="w-12 mx-auto mb-6" />
        <h2 className="text-white w-[13rem] text-center text-3xl font-semibold">
          Privacidad en todo momento
        </h2>
      </section>
      <section>
        <img src={HomeIcons} alt="Home Icons" className="w-56 lg:w-72" />
      </section>
      <section className="w-[21rem] lg:w-[28rem] flex gap-3 flex-col">
        <Button2 params={buttonParams1} />
        <Button1 params={buttonParams2} />
        <p className="w-56 text-white m-auto mt-3 text-center">
          Los mensajes y archivos estan cifrado de extremo a extremo.
        </p>
      </section>
    </div>
  );
}
