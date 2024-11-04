import { useEffect, useState } from "react";
import useStore from "../../store/state";
import sendAlt from "../../assets/send-alt.svg";
import arrowSmLeft from "../../assets/arrow-sm-left.svg";
import pendingSvg from "../../assets/pending.svg";
import getMessageService from "../../services/getMessage";
import { useNavigate } from "react-router-dom";
import socket from "../../store/socket";
import getDateChat from "./getDate";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [messagePending, setMessagePending] = useState([]);
  const chat = useStore((state) => state.chat);
  const user = useStore((state) => state.user);

  useEffect(() => {
    getMessage();

    socket.on("newMessage", (message) => {
      console.log(message);
      const updatedItems = messagePending.filter((m) => m !== message);
      if (updatedItems != messagePending) {
        setMessagePending(updatedItems);
      } else {
        setMessages((prevItems) => [...prevItems, message]);
      }
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  async function getMessage() {
    try {
      const response = await getMessageService(
        `${user.userId}/${chat.contact_user_id}`
      );

      if (response?.error) {
        alert(
          "No fue posible cargar los mensajes, recarga la pagina por favor."
        );
        navigate("/main");
      }

      setMessages(response);
    } catch (error) {
      console.log(error);
    }
  }

  function sendMessage() {
    if (input.trim() == "") {
      return;
    }

    socket.emit("chat message", {
      idUserSend: user.userId,
      idUserReceiver: chat.contact_user_id,
      message: input,
      date: getDateChat(),
    });

    const messagePending = {
      datetime: getDateChat(),
      message: input,
      receiver: chat.username,
      sender: user.username,
    };

    setMessages((prevItems) => [...prevItems, messagePending]);
    setMessagePending((prevItems) => [...prevItems, messagePending]);

    setInput("");
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="w-screen h-screen grid grid-rows-[auto,1fr,auto]">
      <header className="border-b p-2 flex items-center justify-center">
        <div
          className="group p-1 size-14 mr-10 rounded-xl cursor-pointer"
          onClick={() => navigate("/main")}
        >
          <img
            src={arrowSmLeft}
            alt="return"
            className="group-hover:opacity-65"
          />
        </div>
        <section className="flex p-2 mr-6 items-center justify-center gap-2">
          <div className="size-14 flex items-center justify-center rounded-full border-2 border-primary p-1 overflow-hidden mr-4 cursor-pointer">
            <span className="font-medium">
              {chat.username.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">{chat.username}</p>
          </div>
        </section>
      </header>
      <section className="relative">
        <div className="chat-content absolute top-0 w-full h-full opacity-15"></div>
        <div className="md:w-1/2 w-full sm:w-4/6 p-2 h-full mx-auto overflow-y-scroll scrollbar-hide">
          {messages.map((message, i) => (
            <article
              key={message.datetime + i}
              className={`w-full flex flex-col mb-1 ${
                user.username == message.sender ? " items-end" : " items-start"
              }`}
            >
              <div
                className={`p-2  rounded-md w-fit max-w-[50%] ${
                  user.username == message.sender
                    ? " bg-primary/80"
                    : " bg-accent border"
                }`}
              >
                <p className="whitespace-normal break-all">
                  {message.message} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </p>
                <div className="flex relative">
                  <p
                    className={`text-xs opacity-70 text-right leading-none w-full ${
                      messagePending.includes(message) && "mr-5"
                    }`}
                  >
                    {message.datetime.split(" ").at(-1)}
                  </p>

                  {messagePending.includes(message) && (
                    <img
                      src={pendingSvg}
                      alt="pending"
                      className="absolute w-5 right-0 -bottom-1"
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t p-3 flex justify-center gap-3 items-center">
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Escribe un mensaje..."
          className="rounded-lg  bg-transparent border-2 outline-none  border-primary text-white py-2 px-3 md:w-1/2 w-9/12"
        />
        <button
          className="group p-[8px] hover:p-[7px] size-10  rounded-lg bg-primary hover:bg-primary/70"
          onClick={sendMessage}
        >
          <img src={sendAlt} alt="send message" />
        </button>
      </footer>
    </div>
  );
}
