const Button = ({ params }) => {
  return (
    <button
      onClick={params.onClick}
      className="bg-transparent p-2 hover:bg-primary hover:text-accent rounded-full border border-primary text-primary w-full"
    >
      {params.text}
    </button>
  );
};

export default Button;
