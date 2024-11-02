import React from "react";

const Button = ({ params }) => {
  return <button onClick={params.onClick} className={params.styles}>{params.text}</button>;
};

export default Button;
