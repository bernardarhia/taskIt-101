import React,{ useState} from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
const RightSidebar = () => {

    
    const [selectedDay, setSelectedDay] = useState(0)
    return (
       
         <div className="right_sidebar">
               <Calendar
        value={selectedDay}
        onChange={(e)=>{
            console.log(e);
            setSelectedDay()
        }}
        shouldHighlightWeekends
      />
      <div className="favorites">
          <ul>
              <li>favorite number 1</li>
              <li>favorite number 1</li>
              <li>favorite number 1</li>
              <li>favorite number 1</li>
              <li>favorite number 1</li>
              <li>favorite number 1</li>
          </ul>
      </div>
         </div>
    )
}

export default RightSidebar
