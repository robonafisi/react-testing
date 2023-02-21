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
  
      <div>
      <h1>Welcome to Habitbuilder</h1>
      </div>
      
      <div className="relative container bg-red-500 mx-auto p-6">
        <h2>Weekday</h2>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
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
