import { useState } from "react";
import logo from "../../assets/logo.svg";
import plusSolid from "../../assets/plus-solid.svg";

export default function Main() {
  const [chats, setChats] = useState([]);

  return (
    <div className="bg-accent w-full h-screen py-8 flex flex-col items-center justify-between">
      {chats.length == 0 ? (
        <section className="my-40 flex flex-col items-center">
          <img src={logo} alt="Intern Logo" className="w-12 mx-auto mb-6" />
          <h2 className="text-white w-[13rem] text-center text-4xl font-semibold">
            Comienza a chatear
          </h2>
          <button className="p-2 rounded-full bg-primary mt-12">
            <img src={plusSolid} alt="Agregar chat" className="size-8" />
          </button>
        </section>
      ) : (
        <div>Chats</div>
      )}
      <section className="flex">
        <div className="size-20 rounded-full border-2 border-primary p-1 overflow-hidden mr-6">
          <img
            src="https://github.com/leowader.png"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg">Leowader</p>
          <div className="flex">
            <p className="text-lg font-semibold mr-1">ID:</p>
            <p className="text-lg">7345282jskrs2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
