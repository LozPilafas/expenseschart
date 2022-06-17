import { useState } from "react";
import data from "./data.json";

export function Chart() {
    const [hovered,setHovered]=useState(0);
  //calculate total spend from data source - this will be used to apportion chart heights
  let totalSpend = 0;
  //get date - so we can highlight the current day chart blue
  const todaysDate = new Date(Date.now());
  //gets the number of the day out of the week
  const date = todaysDate.getDay();
 //mark hovered



  data.forEach((item) => {
    totalSpend += item.amount;
  });

 

  //map the data into jsx for each day - create a bar for each day based on data, and adjust height. enlarged by 3
  const jsonData = data.map((item, index) => {
    return (
      <div className="day-bar" key={index}>
        <div className="annotation" style={{visibility:index+1===hovered?"visible":"hidden"}}>£{item.amount}</div>

        <div
          className={index === date ? "chart-bar today" : "chart-bar"}
          style={{ height: (item.amount / totalSpend) * 100 * 3 + "%" }}
          //make annotation visibile if mouse is over
          onMouseOver={()=>setHovered(index+1)}
          onMouseOut={()=>setHovered(0)}
         
          
        >
          {" "}
        </div>
        <div className="day label">{item.day}</div>
      </div>
    );
  });

  return (<div className="chart" >{jsonData}</div>)
}
