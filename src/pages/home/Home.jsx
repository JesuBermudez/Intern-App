import logo from "../../assets/logo.svg";
import HomeIcons from "../../assets/HomeIcons.svg";

export default function Home() {
  return (
    <div className="bg-accent w-full h-screen py-8 flex flex-col items-center justify-between">
      <section>
        <img src={logo} alt="Intern Logo" className="w-12 mx-auto mb-6" />
        <h2 className="text-white w-[11rem] text-center text-2xl font-semibold">
          Privacidad en todo momento
        </h2>
      </section>
      <section>
        <img src={HomeIcons} alt="Home Icons" className="w-52" />
      </section>
      <section>
        <p className="w-56 text-white mt-8">
          Los mensajes y archivos estan cifrado de extremo a extremo.
        </p>
      </section>
    </div>
  );
}
