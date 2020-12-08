import React from "react";

const Duration = ({ ...rest }) => {
  return (
    <select {...rest}>
      <option value="">Hours</option>
      {[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ].map((hour, index) => <option value={hour} key={index}>{hour+' hour(s)'}</option>)}
    </select>
  );
};

export default Duration;
