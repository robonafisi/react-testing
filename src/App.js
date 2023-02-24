import './App.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


function App() {

  const [count, setCount] = useState(0);
  const [habitcount, setHabitcount] = useState(0);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      
      <Helmet>
                <style>{'body { background: rgb(0,255,199); background: linear-gradient(90deg, rgba(0,255,199,1) 0%, rgba(0,255,241,1) 100%);}'}</style>
      </Helmet>
  
      <div className='text-center'>
      <h1 className='text-4xl font-extrabold m-5'>Welcome to Habitbuilder</h1>
      </div>
      
      <div className='flex items-center justify-between'>
      <div>
      </div>

      <div className="flex space-x-10 m-5">
        <div><h1 className='m-2 text-xl font-bold'>Name of the Habit: Reading Daily</h1></div>
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Count my Habit</span>
          </label>
        </div>
        <div className='flex flex-col border-2 border-indigo-600'><p className='m-2 text-xl font-bold'>Monday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Tuesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Wednesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Thursday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Friday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Saturday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Sunday</p><input type="checkbox" className='m-2'/></div>
        </div>
      </div>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add to Counter
      </button>
      
      <p>You have {habitcount} habits</p>
      <button onClick={() => setHabitcount(habitcount + 1)}>
        Add to Habits
      </button>

      <button onClick={() => {setCount(0); setHabitcount(0);}}>
        Reset
      </button>
    </div>
  );
}

export default App;
