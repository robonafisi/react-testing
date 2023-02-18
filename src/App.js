import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0);

   useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
