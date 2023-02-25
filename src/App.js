import './App.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


function App() {

  const [count, setCount] = useState(0);
  const [habitcount, setHabitcount] = useState(0);
  const [habittype, setHabittype] = useState(false);
  const [moncount, setMoncount] = useState(0);
  const [tuecount, setTuecount] = useState(0);
  const [wedcount, setWedcount] = useState(0);
  const [thucount, setThucount] = useState(0);
  const [fricount, setFricount] = useState(0);
  const [satcount, setSatcount] = useState(0);
  const [suncount, setSuncount] = useState(0);


   useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function toggleButton(){
    setHabittype(!habittype)
  }

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
       
        <div class="flex items-center justify-center w-full mb-12">
          <label for="toggleB" class="flex items-center cursor-pointer">
            
            <div class="relative">
             
              <input type="checkbox" id="toggleB" onClick={toggleButton} class="sr-only"/>
              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div class="ml-3 text-gray-700 font-medium">
              Habbit Type
            </div>
          </label>
        </div>

        {habittype ?
        <div className='flex items-center'>
        <div className='flex flex-col border-2 border-indigo-600'><p className='m-2 text-xl font-bold'>Monday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Tuesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Wednesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Thursday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Friday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Saturday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Sunday</p><input type="checkbox" className='m-2'/></div>
        </div> :
        <div className='flex items-center'>
        <div className='flex flex-col border-2 border-indigo-600'><p className='m-2 text-xl font-bold'>Monday</p><p>{moncount}</p><button onClick={() => setMoncount(moncount + 1)}>Add to Monday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Tuesday</p><p>{tuecount}</p><button onClick={() => setTuecount(tuecount + 1)}>Add to Tuesday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Wednesday</p><p>{wedcount}</p><button onClick={() => setWedcount(wedcount + 1)}>Add to Wednesday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Thursday</p><p>{thucount}</p><button onClick={() => setThucount(thucount + 1)}>Add to Thursday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Friday</p><p>{fricount}</p><button onClick={() => setFricount(fricount + 1)}>Add to Friday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Saturday</p><p>{satcount}</p><button onClick={() => setSatcount(satcount + 1)}>Add to Saturday</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Sunday</p><p>{suncount}</p><button onClick={() => setSuncount(suncount + 1)}>Add to Sunday</button></div>
        </div>
      }

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
