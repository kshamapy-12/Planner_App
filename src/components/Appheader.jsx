function Appheader(props) {
    const {remainingTasksCount = 0, percentage = 0} = props;

    return ( 
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-indigo-900 text-4xl text-center font-semibold">Task & Priority Planner</h1>
<div className="grid grid-cols-1 md:grid-cols-2 items-star justify-around gap-5 mt-4 w-[80%] text-slate-800">
        <div className="bg-white p-6 rounded-2xl border-3 border-gray-200 shadow-lg">
            <h2 className="font-bold text-2xl">Quick Stat Badge</h2>
            <h3 className="text-xl text-emerald-700 pt-4">{remainingTasksCount} Tasks Remaining</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border-3 border-gray-200 shadow-lg">
            <h2 className="font-bold text-2xl">Progress Bar</h2>
            <h3 className="text-xl text-emerald-700 pt-4">{percentage}% remaining</h3>
        </div>
        </div>
        </div>
     );
}

export default Appheader;