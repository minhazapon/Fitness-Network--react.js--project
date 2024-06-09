import "react-big-calendar/lib/css/react-big-calendar.css"

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Date = () => {
    return (
        <div className=" ">

           <div>


             <h1 className=" text-5xl font-serif mb-10">Our Service Calendar</h1>

           </div>


<div className=" flex-col md:flex-row lg:flex-row ">
           <Calendar
             localizer={localizer}
             startAccessor="start"
             endAccessor="end"
             style={{ height: 500 }}
           />
         </div>
            
        </div>
    );
};

export default Date;