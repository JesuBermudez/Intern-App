import logo from "../../assets/logo.svg";

export default function Home() {
  return (
    <div className="bg-accent w-full h-screen flex justify-center">
      <section className="">
        <img src={logo} alt="Intern Logo" className="w-12" />
      </section>
    </div>
  );
}
