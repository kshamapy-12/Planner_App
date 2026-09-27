function TaskList(props) {
    const { task, deleteTask, completedTask } = props; 
    return ( 
        <div>
{
    task.map(function(elem){
        return <div key={elem.id} className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <input type="checkbox" className="w-5 h-5 accent-indigo-600 rounded cursor-pointer border-gray-300 focus:ring-3 focus:ring-gray-300" />
            <p className="w-full bg-white px-4 py-3 text-black font-semibold text-xl rounded-xl border-3 border-gray-200">{elem.title}</p>
            
            <div className="bg-indigo-300 px-4 py-3 font-semibold rounded-2xl w-xs text-center">{elem.priority}</div>
            <button onClick={() => completedTask(elem.id)} className="bg-linear-to-b from-indigo-600 to-emerald-500 px-6 py-3 text-white rounded-full active:scale-95">{elem.completed ? 'Undo' : 'Done'}</button>
            <button onClick={() => {
                deleteTask(elem.id);
            }} className="bg-linear-to-b from-indigo-600 to-emerald-500 px-6 py-3 text-white rounded-full active:scale-95">Delete</button>
        </div>
    })
}


        </div>
     );
}

export default TaskList;