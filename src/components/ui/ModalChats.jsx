import { useState } from "react";
import closeIcon from "../../assets/exit.svg";
import useStore from "../../store/state";
import Button2 from "./Button2";

export default function ModalChats({ onAdd }) {
  const [input, setInput] = useState("");
  const openModal = useStore((state) => state.openModal);
  const buttonParams = {
    onClick: () => input != "" && onAdd(input),
    text: "Iniciar Chat",
  };

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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <Button2 params={buttonParams}></Button2>
      </div>
    </section>
  );
}
