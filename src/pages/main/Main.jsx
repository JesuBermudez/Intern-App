import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import plusSolid from "../../assets/plus-solid.svg";
import Modal from "../../components/ui/Modal";
import useStore from "../../store/state";
import ModalChats from "../../components/ui/ModalChats";
import ModalKey from "../../components/ui/ModalKey";
import socket from "../../store/socket";

export default function Main() {
  const [chats, setChats] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalKey, setOpenModalKey] = useState(false);

  const isOpenModal = useStore((state) => state.isOpenModal);
  const closeModal = useStore((state) => state.closeModal);
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      window.location = "/";
      return;
    }

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    socket.on("message", (data) => {
      console.log("Mensaje recibido:", data);
    });

    socket.on("contact Added", (contact) => {
      setChats((prevItems) => [...prevItems, contact]);
      closeModal();
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    console.log(isOpenModal);
  }, [isOpenModal]);

  function onAdd(cui) {
    socket.emit("add", { userId: user.userId, contactUserId: cui });
    console.log("addd");
  }

  return (
    user && (
      <>
        <div className="bg-accent h-screen w-full py-8 flex flex-col items-center justify-between">
          {chats.length == 0 ? (
            <section className=" flex flex-col items-center mt-16">
              <img src={logo} alt="Intern Logo" className="w-12 mx-auto mb-6" />
              <h2 className="text-white w-[13rem] text-center text-4xl font-semibold">
                Comienza a chatear
              </h2>
              <button
                className="p-2 rounded-full bg-primary mt-12"
                onClick={() => setOpenModal(!openModal)}
              >
                <img src={plusSolid} alt="Agregar chat" className="size-8" />
              </button>
            </section>
          ) : (
            <div>Chats</div>
          )}
          <section className="lg:flex lg:p-0 p-4 items-center justify-center gap-2 ">
            <div
              className="size-20 rounded-full border-2 border-primary p-1 overflow-hidden mr-6 cursor-pointer"
              onClick={() => setOpenModalKey(!openModalKey)}
            >
              <img
                src="https://github.com/leowader.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg">
                <span className="font-semibold">Nombre de usuario: </span>
                {user.username}
              </p>
              <div className="flex">
                <p className="text-lg font-semibold mr-1">ID:</p>
                <p className="text-lg">{user.userId}</p>
              </div>
            </div>
          </section>
        </div>
        {openModal === true ? (
          <Modal setOpenModal={setOpenModal}></Modal>
        ) : (
          <>{isOpenModal ? <ModalChats onAdd={onAdd} /> : ""}</>
        )}
        {openModalKey ? (
          <ModalKey onClose={() => setOpenModalKey(false)}></ModalKey>
        ) : (
          ""
        )}
      </>
    )
  );
}
