import './App.css';
import { useState } from 'react';
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


  document.title = "Habit Tracker";

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
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>MON</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>TUE</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>WED</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>THU</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>FRI</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>SAT</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold'>SUN</p><input type="checkbox" className='m-2'/></div>
        </div> :
        <div className='flex items-center'>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>MON</p><p className='text-center'>{moncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setMoncount(moncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setMoncount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>TUE</p><p className='text-center'>{tuecount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setTuecount(tuecount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setTuecount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>WED</p><p className='text-center'>{wedcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setWedcount(wedcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setWedcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>THU</p><p className='text-center'>{thucount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setThucount(thucount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setThucount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>FRI</p><p className='text-center'>{fricount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setFricount(fricount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setFricount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SAT</p><p className='text-center'>{satcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSatcount(satcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSatcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SUN</p><p className='text-center'>{suncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSuncount(suncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSuncount(0)}>Reset</button></div>
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
