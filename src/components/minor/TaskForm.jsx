import React, { useContext, useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import DatePicker from "react-modern-calendar-datepicker";
import { TaskListContext } from "../../context/TaskContext";
import Button from "../major/Button";
import Tags from "./Tags";
import { v4 as uuidv4 } from "uuid";
import { addOne } from "../../utils/query";
const TaskForm = () => {
  const [error, setError] = useState("");
  // show form or hide form
  const { showInput, setShowInput } = useContext(TaskListContext);

  //text inputs
  const [taskTitle, setTaskTitle] = useState("");

  // tags
  const [disableTag, setDisableTags] = useState(false);
  const [inputTags, setInputTags] = useState([]);
  const [singleTagValue, setSingleTagValue] = useState("");
  // date states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [task, setTask] = useState({
    id: uuidv4(),
    tags: [],
    createdAt: new Date(),
    startDate: "",
    endDate: "",
    item: [],
  });
  useEffect(() => {
    if (inputTags.length === 2) {
      setDisableTags(true);
    } else {
      setDisableTags(false);
    }
  }, [inputTags.length]);

  // handle form submission
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (
      taskTitle === "" ||
      inputTags.length === 0 ||
      endDate === "" ||
      startDate === ""
    ) {
      setError("Please fill all forms");
      return;
    }
    setTask({
      ...task,
      startDate: `${startDate.year}-${startDate.month}-${startDate.day}`,
      endDate: `${endDate.year}-${endDate.month}-${endDate.year}`,
      tags: [...inputTags],
    });

    // send data into database
        try{
          const response = await addOne(taskTitle, task)
          setTaskTitle("");
          setError("");
          setInputTags([]);
          setStartDate("");
          setEndDate("");
          setShowInput(false);
          console.log(task);
          console.log(response);
        }
        catch(err){
          console.log(err.message);
        }
    
   
  };
  // handles tag submission
  const handleTags = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      setSingleTagValue(e.target.value);
      setInputTags([...inputTags, e.target.value]);
      e.target.value = "";
    }
  };

  const formatStartDateValue = () => {
    if (!startDate) return "";
    return `${startDate.day} ${startDate.month} ${startDate.year}`;
  };

  const formatEndDateValue = () => {
    if (!endDate) return "";
    return `${endDate.day} ${endDate.month} ${endDate.year}`;
  };

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
            <div className="close-form">
              <FiX onClick={() => setShowInput(false)} />
            </div>
            <form action="" onSubmit={handleTaskSubmit}>
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
              <div className="dates">
                <div className="start-date">
                  <label htmlFor="">Start date</label>
                  <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    inputPlaceholder="Select a date" // placeholder
                    formatInputText={formatStartDateValue} // format value
                    inputClassName="my-custom-input" // custom class
                  />
                </div>
                <div className="finish-date">
                  <label htmlFor="">Finish date</label>
                  <DatePicker
                    value={endDate}
                    onChange={setEndDate}
                    inputPlaceholder="Select a date" // placeholder
                    formatInputText={formatEndDateValue} // format value
                    inputClassName="my-custom-input" // custom class
                  />
                </div>
              </div>
              <div className="submit">
                <Button size="btn__small">Add Task</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskForm;
