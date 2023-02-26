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
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Monday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Tuesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Wednesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Thursday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Friday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Saturday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>Sunday</p><input type="checkbox" className='m-2'/></div>
        </div> :
        <div className='flex items-center'>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>MON</p><p className='text-center'>{moncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setMoncount(moncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setMoncount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>TUE</p><p className='text-center'>{tuecount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTuecount(tuecount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setTuecount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>WED</p><p className='text-center'>{wedcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setWedcount(wedcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setWedcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>THU</p><p className='text-center'>{thucount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setThucount(thucount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setThucount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>FRI</p><p className='text-center'>{fricount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setFricount(fricount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setFricount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SAT</p><p className='text-center'>{satcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setSatcount(satcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setSatcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SUN</p><p className='text-center'>{suncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setSuncount(suncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setSuncount(0)}>Reset</button></div>
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
