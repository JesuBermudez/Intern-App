import QRCode from "react-qr-code";
import messageIcon from "../../assets/messages.svg";
import usersIcon from "../../assets/users.svg";
import exitIcon from "../../assets/exit.svg";

export default function Modal({ id }) {
  return (
    <section className="flex items-center justify-center flex-col h-screen bg-white bg-opacity-10">
      <div className="bg-accent rounded-lg p-5">
        <div className="flex flex-col gap-2 w-[21rem] lg:w-[28rem]">
          <button className="flex justify-end">
            <img src={exitIcon} alt="Cerrar modal" />
          </button>

          <div className="flex gap-2">
            <img src={messageIcon} alt="Icono de mensaje" />
            <button className="hover:text-primary">Nuevo mensaje</button>
          </div>

          <div className="flex gap-2">
            <img src={usersIcon} alt="Icono de usuarios" />
            <button className="hover:text-primary">Crear grupo</button>
          </div>

          <div className="mt-4">
            <span className="font-bold">Id de cuenta</span>
            <p>
              Comparte este código con tus amigos para iniciar una conversación
            </p>
          </div>

          <QRCode className="w-full" size={300} value={id} />
        </div>
      </div>
    </section>
  );
}
