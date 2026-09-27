import Appheader from './components/Appheader';
import Controls from './components/Controls';
import Inputs from './components/Inputs';
import TaskList from './components/TaskList';
import React, { useState } from 'react';
import './index.css' 
import { compile } from 'tailwindcss';
function App() {




  const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('High');
    const [activeTab, setActiveTab] = useState('All');
    const [task, setTask] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        setTitle('');
        setPriority('High');

        const copyTask = [...task];
       copyTask.push({id: Date.now(), title, priority, completed: false});
        setTask(copyTask);
    }

    const deleteTask = (idx) => {
      setTask(task.filter((elem) => elem.id !== idx));
    }

    const filteredTask = task.filter((elem) => {
if(activeTab === 'Completed'){ return elem.completed;}
else if(activeTab === 'Active'){ return !elem.completed;}
return true;
    }).filter((elem) => elem.title.toLowerCase().includes(searchTerm.toLowerCase()));

    function completedTask(idtoComplete){
        setTask(
        task.map((elem) =>
            elem.id === idtoComplete ? { ...elem, completed: !elem.completed } : elem
        )
    );
    }


const totalTasks = task.length;
const completedTaskCount = task.filter((item) => item.completed).length;
const remainingTasksCount = totalTasks - completedTaskCount;

const percentage = totalTasks > 0 ? Math.round((completedTaskCount/totalTasks) * 100) : 0;

  return ( 
    <div className='bg-linear-to-r from-indigo-800 to-emerald-500 w-full h-full bg-no-repeat bg-cover absolute flex items-center justify-center'>
<div className='bg-indigo-200 w-[90%] max-h-[90%] overflow-y-auto p-8 mx-auto relative rounded-4xl shadow-lg space-y-4 scrollbar-thin'>
<Appheader remainingTasksCount={remainingTasksCount} percentage={percentage}/> 
<Inputs title={title} setTitle={setTitle} priority={priority} setPriority={setPriority} addTask={addTask} />
<Controls activeTab={activeTab} setActiveTab={setActiveTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
<div className='mt-4 text-xl'>
{task.length === 0 ? 'No items to show' : <TaskList task={filteredTask} deleteTask={deleteTask} setTask={setTask} completedTask={completedTask} /> }
</div>

</div>

    </div>
   );
}

export default App;