import React, { useState, useEffect } from "react";
import { findTable } from "../../utils/query";

const DisplayTags = ({ tag, title }) => {
  const [itemsDone, setItemsDone] = useState(0);
  const [item, setItem] = useState([]);
  // useEffect(() => {
  //   // const getItems = async () => {
  //   //   const foundItems = await findTable(title);
  //   //   const done = foundItems.item.filter((i) => i.isCompleted === true);
  //   //   setItem([...foundItems.item])
  //   //   setItemsDone(done.length);
  //   // };

  //   // getItems();
  // }, [title]);
  return (
    <>
      <div className="display-tags">
        {tag[0] &&
          tag[0].map((t, index) => (
            <div className="tag-e" key={index}>
              {t}
            </div>
          ))}
      </div>
      <div className="task-done">
        {/* {(itemsDone / item.length) * 100 + "%"} */}
        <div className="inner-line">
          <div className="line" style={{ width: "20%" }}></div>
        </div>
      </div>
    </>
  );
};

// 4 1/1 * 100
export default DisplayTags;
