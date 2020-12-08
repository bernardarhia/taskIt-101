import { Input } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { TaskListContext } from "../../context/TaskContext";
import Button from "../major/Button";
import { FiX } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import Duration from "./Duration";
import { addItem, deleteAll, getAllItems } from "../../utils/query";
import Alert from "../major/Alert";

const AddItemForm = ({ hideShowForm, showForm, setShowForm,table }) => {

const {setAllItems,AllItems} = useContext(TaskListContext)

  const [date, setDate] = useState();
  const [duration, setDuration] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [item, setItem] = useState({
    id: uuidv4(),
    isCompleted: true,
    text: "",
  });
  const handleItemSubmit = async () => {

    if(!date || !duration || !itemTitle || !priority){
        setError('Fill all inputs form')
        return;
    }
    setItem({ ...item, text: itemTitle, priority, date, duration });
  
   
  };

  const handleItemTitle = (e) => {
    setItemTitle(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  useEffect(() => {
     const sendItem = async()=>{
        if(!date || !duration || !itemTitle || !priority){
            return;
        }
         const itemSent = await addItem(table, item);
         if(itemSent){
               setError('')
    setDuration('')
    setItemTitle('')
    setSuccess('Item added');
    setPriority('')
    setDate()

    setTimeout(()=>{
        setAllItems([...itemSent]);
        setSuccess('')
        setShowForm(!showForm)
    },2000)
         }
     }
     sendItem()
    async function getAll(){
        const result = await await getAllItems(table)
        if(result){
            setAllItems([...result])
        }
    }
    getAll()
  },[item, table,setAllItems])
  return (
    <>
      {showForm && (
          <div className="item-form__container">
          <div className="item-form">
            {error && <Alert type="error" text={error} />}
           {success && <Alert type="success" text={success} />}
            <div className="close">
              <FiX onClick={hideShowForm} />
            </div>
            <div className="description">
              <label>List title</label>
              <Input
                type="text"
                placeholder="List title"
                onChange={handleItemTitle}
                value={itemTitle}
              />
            </div>
            <div className="priority">
              <label>Priority</label>
              <select onChange={handlePriority} value={priority}>
                <option>Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div className="start-date">
              <label>Date to start</label>
              <DatePicker
                date={date}
                onDateChange={setDate}
                locale={enGB}
                minimumDate={new Date()}
              >
                {({ inputProps, focused }) => (
                  <input
                    className={"input" + (focused ? " -focused" : "")}
                    {...inputProps}
                    readOnly={true}
                  />
                )}
              </DatePicker>
            </div>
            <div className="duration">
              <label>Duration</label>
              <Duration onChange={handleDuration} />
            </div>
            <div className="add-item">
              <Button size="btn__small" color="blue" onClick={handleItemSubmit}>
                Add Item
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddItemForm;
