import React, { useState } from "react";

function Inputs(props) {

    const {title, setTitle, priority, setPriority, addTask} = props;
  
    return ( 
        <div className="flex flex-col md:flex-row flex-wrap w-[80%] mx-auto m-6 items-center justify-between">
            <input value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} type="text" placeholder="Task Title" className="bg-white w-full p-2 outline-none rounded-xl border-3 border-gray-200"/>
            <select value={priority} onChange={(e) => {
                setPriority(e.target.value);
            }} className="bg-white border-2 border-slate-200 p-2 outline-none rounded-xl font-semibold">
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
            </select>
            <button onClick={(e) => {
               addTask(e)
            }} className="bg-linear-to-t from-indigo-600 to-emerald-500 px-6 py-3 sm:mt-4 text-white rounded-full active:scale-95">Add Task</button>
        </div>
     );
}

export default Inputs;