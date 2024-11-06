import { useState } from "react";
import Button2 from "./Button2";
import closeIcon from "../../assets/exit.svg";
import { apiUrl } from "../../store/api";
import useStore from "../../store/state";
export function ModalFile({ closeModal, filename }) {
  const [publicKey, setPublicKey] = useState("");
  const user = useStore((state) => state.user);
  const params = {
    onClick: () => {
      if (publicKey.trim() === "") {
        alert("Por favor, ingrese la clave pública.");
        return;
      }
      if (user.recoveryKey === publicKey) {
        window.open(`${apiUrl}/decrypt-file/${filename}.enc`, "_blank");
      }else{
        alert("Clave publica incorrecta")
      }
    },
    text: "Desencriptar",
  };

  return (
    <section className="backdrop-blur-[4px] inset-0 z-50 fixed flex items-center justify-center ">
      <div className="flex flex-col bg-accent  w-[21rem] lg:w-[28rem] gap-5 border p-5 rounded-lg border-opacity-10">
        <div className="flex w-full justify-between ">
          <h2 className="font-bold text-primary">Desencriptar archivo</h2>
          <img
            className="cursor-pointer"
            onClick={closeModal}
            src={closeIcon}
            alt="close"
          />
        </div>
        <p>
          Para poder visualizar el archivo{" "}
          <span className="text-primary font-semibold">{filename}</span> debe
          ingresar su clave pública.
        </p>
        <div className="flex flex-col gap-2">
          <label htmlFor="publicKey" className="font-bold">
            Clave pública
          </label>
          <input
            id="publicKey"
            className="p-2 rounded-lg outline-none border border-secondary bg-transparent"
            type="text"
            placeholder="Ingrese la clave pública"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
          />
        </div>

        <Button2 params={params}></Button2>
      </div>
    </section>
  );
}
