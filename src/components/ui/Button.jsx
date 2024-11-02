/* eslint-disable react/prop-types */
const Button = ({ params }) => {
  return (
    <button onClick={params.onClick} className={params.styles}>
      {params.text}
    </button>
  );
};

export default Button;
