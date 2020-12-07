import React from "react";

const Button = ({ shape, size, color, children, ...rest }) => {

  const BTN_SHAPES = ["btn__normal", "rounded"];
  const BTN_SIZES = ["btn__small", "btn__medium", "btn__large"];
  const BTN_COLORS = ["transparent","blue", "gray", "red", "yellow", "green"];

  const btnHasShape = BTN_SHAPES.includes(shape) ? shape : BTN_SHAPES[0];
  const btnHasSize = BTN_SIZES.includes(size) ? size : null;
  const btnHasColor = BTN_COLORS.includes(color) ? color : BTN_COLORS[0];
  return (
    <button
      className={`btn ${!size ? "" : btnHasSize} ${btnHasColor} ${btnHasShape}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
