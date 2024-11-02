const Button1 = ({ params }) => {
  return (
    <button
      onClick={params.onClick}
      className="bg-transparent p-2 hover:bg-slate-400/30 hover:text-white rounded-full border border-primary text-primary w-full"
    >
      {params.text}
    </button>
  );
};

export default Button1;
