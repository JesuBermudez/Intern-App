import closeIcon from "../../assets/exit.svg";
import useStore from "../../store/state";
export default function ModalChats() {
  const openModal = useStore((state) => state.openModal);
  return (
    <section className="backdrop-blur-[4px] inset-0 z-50 fixed flex items-center justify-center ">
      <div className="flex flex-col bg-accent  w-[21rem] lg:w-[28rem] gap-5 border p-5 rounded-lg border-opacity-10">
        <div className="flex    w-full justify-between ">
          <h2 className="font-bold text-primary">Nuevo mensaje</h2>
          <img
            className="cursor-pointer"
            onClick={openModal}
            src={closeIcon}
            alt="close"
          />
        </div>
        <p>
          Para iniciar una nueva conversación, ingresa el ID del contacto que
          deseas agregar.{" "}
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            ID cuenta
          </label>
          <input
            className="p-2 rounded-lg outline-none border border-secondary bg-transparent"
            type="text"
            placeholder="Ingrese el ID de la cuenta"
          />
        </div>
      </div>
    </section>
  );
}
