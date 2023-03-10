import './App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


function App() {

  const [habittype, setHabittype] = useState(false);
  const [habitname, setHabitname] = useState("Habit Name");
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

  const habitNamer = (event) => {
    setHabitname(event.target.value)
  }

  return (
    <div>
      
      <Helmet>
                <style>{'body { background: rgb(0,255,199); background: linear-gradient(90deg, rgba(0,255,199,1) 0%, rgba(0,255,241,1) 100%);}'}</style>
      </Helmet>
  
      <div className='text-center'>
      <h1 className='text-4xl font-extrabold m-5'>Welcome to Habitbuilder</h1>
      </div>
       
        <div class="flex items-center justify-center w-full mb-12">
          <label for="toggleB" class="flex items-center cursor-pointer">
            <div class="relative">
             
              <input type="checkbox" id="toggleB" onClick={toggleButton} class="sr-only"/>
              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div class="text-2xl text-gray-700 font-bold m-2">
              Habbit Type
            </div>
          </label>
        </div>

        <div className='text-center'>
        <h2 className="text-2xl font-bold">Habit Name</h2>
        <input className="text-2xl font-bold m-2 my-10 bg-transparent border-2 border-sky-500" onChange={habitNamer} text="Name of the Habit - Click to Change" />
        </div>

        {habittype ?
        <div className='flex items-center justify-center'>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>MON</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>TUE</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>WED</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>THU</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>FRI</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>SAT</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col m-3'><p className='m-2 text-xl font-bold'>SUN</p><input type="checkbox" className='m-2'/></div>
        </div> :
        <div className='flex items-center justify-center'>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>MON</p><p className='text-center'>{moncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setMoncount(moncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setMoncount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>TUE</p><p className='text-center'>{tuecount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setTuecount(tuecount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setTuecount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>WED</p><p className='text-center'>{wedcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setWedcount(wedcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setWedcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>THU</p><p className='text-center'>{thucount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setThucount(thucount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setThucount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>FRI</p><p className='text-center'>{fricount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setFricount(fricount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setFricount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SAT</p><p className='text-center'>{satcount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSatcount(satcount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSatcount(0)}>Reset</button></div>
        <div className='flex flex-col'><p className='m-2 text-xl font-bold text-center'>SUN</p><p className='text-center'>{suncount}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSuncount(suncount + 1)}>Add</button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-1" onClick={() => setSuncount(0)}>Reset</button></div>
        </div>
      }

        <div>
          <p>{habitname}</p>
        </div>




<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>




        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-bold m-5 mt-12'>Annual Results</h2>
          <div className='flex'>
        
        <table className='table-auto'>
        <tr>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
        </tr>
        <tr>
          <td>Habit 1</td>
          <td>Habit 1</td>
          <td>Habit 1</td>
        </tr>
        <tr>
          <td>Habit 2</td>
          <td>Habit 2</td>
          <td>Habit 2</td>
        </tr>
        <tr>
          <td>Habit 3</td>
          <td>Habit 3</td>
          <td>Habit 3</td>
        </tr>
      </table>

          </div>
        </div>
        </div>
  );
}

export default App;

