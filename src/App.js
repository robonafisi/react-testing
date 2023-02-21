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
  
      <div className='flex items-center'>
      <h1>Welcome to Habitbuilder</h1>
      </div>
      
      <div className='flex items-center justify-between'>
      <div>
      </div>
      <div className="flex space-x-16">
        <div className='flex flex-col'><p className='m-2'>Monday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Tuesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Wednesday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Thursday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Friday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Saturday</p><input type="checkbox" className='m-2'/></div>
        <div className='flex flex-col'><p className='m-2'>Sunday</p><input type="checkbox" className='m-2'/></div>
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
