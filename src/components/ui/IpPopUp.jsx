import exitIcon from "../../assets/exit.svg";
import Button1 from "./Button1";
import Button2 from "./Button2";

export default function IpPopUp({ onConfirm, onCancel }) {
  const params1 = {
    text: "Aceptar",
    onClick: onConfirm,
  };
  const params2 = {
    text: "Cancelar",
    onClick: onCancel,
  };

  return (
    <div className="w-screen h-screen absolute top-0 z-50 flex items-center justify-center backdrop-blur-[4px]">
      <div className="flex flex-col gap-1 w-[21rem] bg-accent rounded-lg p-6 border  border-secondary border-opacity-20 ">
        <button
          className="flex justify-end hover:opacity-40"
          onClick={onCancel}
        >
          <img src={exitIcon} alt="Cerrar modal" />
        </button>
        <h2 className="text-xl font-semibold">Permitir Ip</h2>
        <div className="w-full border-t border-secondary/50 mt-2"></div>
        <div className=""></div>
        <p>
          Para mayor seguridad de su cuenta, solicitamos permiso para guardar su
          Ip.
        </p>
        <div className="flex gap-2 mt-4">
          <Button2 params={params1} />
          <Button1 params={params2} />
        </div>
      </div>
    </div>
  );
}
