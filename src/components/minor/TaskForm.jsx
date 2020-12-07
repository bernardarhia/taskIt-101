import React, { useContext, useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { TaskListContext } from "../../context/TaskContext";
import Button from "../major/Button";
import Tags from "./Tags";
import { v4 as uuidv4 } from "uuid";
import { addOne } from "../../utils/query";
const TaskForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // show form or hide form
  const { showInput, setShowInput } = useContext(TaskListContext);

  //text inputs
  const [taskTitle, setTaskTitle] = useState("");

  // tags
  const [disableTag, setDisableTags] = useState(false);
  const [inputTags, setInputTags] = useState([]);
  const [singleTagValue, setSingleTagValue] = useState("");

  const [task, setTask] = useState({
    id: uuidv4(),
    tags: [],
    createdAt: new Date(),
    item: [],
  });

  // handle form submission
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (taskTitle === "" || inputTags.length === 0) {
      setError("please fill all inputs");
      return;
    }

    // send data into database
    try {
      const response = await addOne(taskTitle, {
        ...task,
        tags: [...inputTags],
      });
      setError("");
      setSuccess("Success");

      

      setTask({
        id: uuidv4(),
        tags: [],
        createdAt: new Date(),
        item: [],
      });

      setTimeout(() => {
        setTaskTitle("");
      setInputTags([]);
      setSingleTagValue("");
        setSuccess("");
        setShowInput(false);
      }, 1500);
    } catch (err) {
      console.log(err.message);
    }
  };

  // handles tag submission
  const handleTags = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setError("Add a tag");
        return;
      }
      setSingleTagValue(e.target.value);
      setInputTags([...inputTags, e.target.value]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (inputTags.length === 2) {
      setDisableTags(true);
    } else {
      setDisableTags(false);
    }
  }, [inputTags.length]);

  return (
    <>
      {showInput && (
        <div
          className="task-form"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="form">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p className="success">{success}</p>}
            <div className="close-form">
              <FiX onClick={() => setShowInput(false)} />
            </div>
            <div className="task-title">
              <label htmlFor="title">Task title</label>
              <Input
                type="text"
                placeholder="example: Clone Facebook"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <label>Tags</label>
            <div className="tags">
              <div className="tags-input">
                {!disableTag && (
                  <Input
                    placeholder=" example: Web development"
                    disabled={disableTag}
                    onKeyPress={handleTags}
                  />
                )}
              </div>
              <div className="tags-element">
                <Tags tags={inputTags} setTags={setInputTags} />
              </div>
            </div>
            <div className="submit">
              <Button size="btn__small" onClick={handleTaskSubmit}>
                Add Task
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskForm;
