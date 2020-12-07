import React, { useState, useEffect } from "react";
import { findTable } from "../../utils/query";

const DisplayTags = ({ tag, title }) => {
  const [itemsDone, setItemsDone] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const foundItems = await findTable(title);
    //   console.log(foundItems.item);
      setItemsDone([...itemsDone, foundItems.item]);
    };

    getItems();
  }, [title]);
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
        {itemsDone &&
          itemsDone.length !== 0 &&
          itemsDone.completed &&
          itemsDone.length * 100 + "%"}
        <div className="inner-line">
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default DisplayTags;
