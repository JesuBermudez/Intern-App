export default function Button2({ params }) {
  return (
    <button
      onClick={params.onClick}
      className="p-2 rounded-full hover:bg-primary/70 bg-primary w-full text-accent"
    >
      {params.text}
    </button>
  );
}
