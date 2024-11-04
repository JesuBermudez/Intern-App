import userSvg from "../../assets/user.svg";

export default function ContactList({ contacts = [] }) {
  console.log(contacts);

  return (
    <section className="h-1/2 w-full lg:w-1/3 p-2 overflow-y-scroll scrollbar-hide mb-5">
      {contacts.map((contact) => (
        <article
          key={contact.contact_user_id}
          className=" items-center group p-2 mb-2 border border-white border-opacity-20 rounded-lg  bg-opacity-5 hover:rounded-2xl hover:bg-secondary/20 flex gap-3 cursor-pointer"
        >
          <div className="flex border border-primary border-opacity-20 bg-accent items-center justify-center rounded-full overflow-hidden   size-10">
          <img src={userSvg} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className=" font-medium">{contact.username}</h3>
            <p className="text-slate-50/65">escribiendo...</p>
          </div>
        </article>
      ))}
    </section>
  );
}
