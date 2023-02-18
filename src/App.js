import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [habitcount, setHabitcount] = useState(0);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1>Welcome to Habitbuilder</h1>
      <div>
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
