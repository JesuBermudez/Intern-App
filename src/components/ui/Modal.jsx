import QRCode from "react-qr-code";
import messageIcon from "../../assets/messages.svg";
import exitIcon from "../../assets/exit.svg";
import useStore from "../../store/state";

export default function Modal({ setOpenModal }) {
  const openModal = useStore((state) => state.openModal);
  const user = useStore((state) => state.user);

  return (
    <section className="inset-0  backdrop-blur-[4px] fixed z-50 flex items-center justify-center">
      <div className="bg-accent rounded-lg p-6 border  border-secondary border-opacity-20">
        <div className="flex flex-col gap-1 w-[21rem] ">
          <button
            className="flex justify-end hover:opacity-40"
            onClick={() => setOpenModal(false)}
          >
            <img src={exitIcon} alt="Cerrar modal" />
          </button>
          <div
            onClick={() => {
              openModal();
              setOpenModal(false);
            }}
            className="group flex gap-2 p-2 cursor-pointer hover:bg-secondary/30 rounded-md"
          >
            <img src={messageIcon} alt="Icono de mensaje" className="" />
            <p className="group-hover:text-primary">Nuevo mensaje</p>
          </div>

          <div className="w-full border-t border-secondary/50 mt-2"></div>

          <div className="mt-4 px-2">
            <span className="text-lg font-bold">Id de cuenta</span>
            <p className="flex w-rap">
              Comparte este código con tus amigos para iniciar una conversación
            </p>
          </div>

          <QRCode
            className="border-8 border-white mx-auto mt-6 rounded-lg"
            size={250}
            value={user.userId}
          />

          <p className="m-auto mt-3 font-medium">ID: {user.userId}</p>
        </div>
      </div>
    </section>
  );
}
