import userSvg from "../../assets/user-svgrepo-com.svg";

export default function ContactList({ contacts = [] }) {
  console.log(contacts);

  return (
    <section className="h-1/2 w-full lg:w-1/3 p-2 overflow-y-scroll scrollbar-hide">
      {contacts.map((contact) => (
        <article
          key={contact.contact_user_id}
          className="group p-2 mb-2 border rounded-lg hover:rounded-2xl hover:bg-secondary/20 flex gap-3 cursor-pointer"
        >
          <div className="rounded-2xl overflow-hidden p-[8px] border size-16">
            <img src={userSvg} alt="User Profile" className="rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium">{contact.username}</h3>
            <p className="text-slate-50/65">escribiendo...</p>
          </div>
        </article>
      ))}
    </section>
  );
}
