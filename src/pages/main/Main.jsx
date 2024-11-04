import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import plusSolid from "../../assets/plus-solid.svg";
import Modal from "../../components/ui/Modal";
import useStore from "../../store/state";
import ModalChats from "../../components/ui/ModalChats";
import ModalKey from "../../components/ui/ModalKey";
import socket from "../../store/socket";
import getContactService from "../../services/getContacts";
import ContactList from "../../components/contacts/ContactList";

export default function Main() {
  const [contact, setContact] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalKey, setOpenModalKey] = useState(false);

  const isOpenModal = useStore((state) => state.isOpenModal);
  const closeModal = useStore((state) => state.closeModal);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  useEffect(() => {
    if (!user) {
      window.location = "/";
      return;
    }

    getContacts();

    socket.emit("register", user.userId);

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    socket.on("message", (data) => {
      console.log("Mensaje recibido:", data);
    });

    socket.on("contact Added", (contact) => {
      setContact((prevItems) => [...prevItems, contact]);
      closeModal();
    });

    return () => {
      socket.off("connect");
      socket.off("message");
      socket.off("contact Added");
    };
  }, []);

  async function getContacts() {
    const response = await getContactService(user.userId);

    if (response.error) {
      alert(`Error: ${response.error}`);
    }

    setContact(response);
  }

  function onAdd(cui) {
    socket.emit("add", { userId: user.userId, contactUserId: cui });
  }

  return (
    user && (
      <>
        <div className="bg-accent h-screen w-full py-8 flex flex-col items-center justify-between">
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
          {contact.length != 0 && <ContactList contacts={contact} />}
          <section className="lg:flex lg:p-0 p-4 items-center justify-center gap-2 ">
            <div
              className="size-14 flex items-center justify-center rounded-full border-2 border-primary p-1 overflow-hidden mr-4 cursor-pointer"
              onClick={() => setOpenModalKey(!openModalKey)}
            >
              <span className="font-medium">
                {user.username.slice(0, 2).toUpperCase()}
              </span>
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
            <span
              className="hover:text-primary cursor-pointer"
              onClick={() => {
                localStorage.clear();
                setUser(null);
                window.location = "/";
              }}
            >
              Cerrar sesion
            </span>
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
