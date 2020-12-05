import React from "react";

const Input = ({style, ...rest }) => {
  return <input  {...rest}  style={style} />;
};

export default Input;
