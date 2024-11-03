import QRCode from "react-qr-code";
import messageIcon from "../../assets/messages.svg";
import usersIcon from "../../assets/users.svg";
import exitIcon from "../../assets/exit.svg";

export default function Modal({ id, setOpenModal }) {
  return (
    <section className="inset-0  backdrop-blur-[1px] fixed  z-50 flex items-center justify-center flex-col bg-opacity-10">
      <div className="bg-accent rounded-lg p-4 border  border-secondary border-opacity-20">
        <div className="flex flex-col gap-2 w-[21rem] ">
          <button
            className="flex justify-end"
            onClick={() => setOpenModal(false)}
          >
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

          <div className="mt-4 ">
            <span className="font-bold">Id de cuenta</span>
            <p className="flex w-rap">
              Comparte este código con tus amigos para iniciar una conversación
            </p>
          </div>

          <QRCode className="border mx-auto border-white border-opacity-50 rounded-lg" size={250} value={id} />
        </div>
      </div>
    </section>
  );
}
