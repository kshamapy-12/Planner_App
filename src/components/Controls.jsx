function Controls(props) {

    const { activeTab, setActiveTab, setSearchTerm, searchTerm } = props;
const baseBtnStyle = 'px-5 py-2 active:scale-90 border-2 transition-all rounded-2xl shadow-lg cursor-pointer';

const getTabClass = (tabName) =>
    activeTab === tabName
      ? `${baseBtnStyle} bg-indigo-600 border-indigo-700 text-white font-semibold`
      : `${baseBtnStyle} bg-slate-200 border-slate-400 text-slate-600 hover:bg-slate-300`;
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-items-center gap-4 mt-4 max-w-[80%] mx-auto">
            <input value={searchTerm} onChange={(e) => {
               setSearchTerm(e.target.value)
            }} type="search" placeholder="Search" className="bg-white p-3 text-xl rounded-xl outline-none shadow-lg border-3 border-gray-200" />
            <div className="flex justify-items-center items-center gap-5 text-slate-600 text-xl">
            <button onClick={() => {setActiveTab('All')}} className={getTabClass('All')}>All</button>
            <button onClick={() => {setActiveTab('Active')}} className={getTabClass('Active')}>Active</button>
            <button onClick={() => {setActiveTab('Completed')}} className={getTabClass('Completed')}>Completed</button>
            </div>
        </div>
     );
}

export default Controls;