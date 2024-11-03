import useStore from "../../store/state";
import exitIcon from "../../assets/exit.svg";
import { useState } from "react";

export default function ModalKey({ onClose }) {
  const user = useStore((state) => state.user);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(user.recoveryKey)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => console.error("Error al copiar la clave:", error));
  };

  return (
    <div className="w-screen h-screen absolute top-0 z-50 flex items-center justify-center backdrop-blur-[4px]">
      <div className="flex flex-col gap-1 w-[21rem] bg-accent rounded-lg p-6 border border-secondary border-opacity-20 ">
        <button className="flex justify-end hover:opacity-40" onClick={onClose}>
          <img src={exitIcon} alt="Cerrar modal" />
        </button>
        <h2 className="text-xl font-semibold">Clave de recuperación</h2>
        <div className="w-full border-t border-secondary/50 mt-2"></div>
        <div>
          <p className="flex w-wrap text-primary">{user.recoveryKey}</p>
          <button
            onClick={handleCopy}
            className="mt-2 p-2 border border-primary rounded hover:bg-primary-dark"
          >
            {copied ? "Clave copiada!" : "Copiar clave"}
          </button>
        </div>
      </div>
    </div>
  );
}
