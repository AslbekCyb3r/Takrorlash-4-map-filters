import { useState } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState([
    { id: 1, name: 'aslbek', age: 20 },
    { id: 2, name: 'lobar', age: 20 },
    { id: 3, name: 'mexribon', age: 20 },
    { id: 4, name: 'aynur', age: 20 },
    { id: 5, name: 'shaxrizoda', age: 20 },
    { id: 6, name: 'tuymurod', age: 20 },
    { id: 7, name: 'gulrux', age: 20 },
    { id: 8, name: 'shoxsanam', age: 20 },
    { id: 9, name: 'shoxjaxon', age: 20 },
    { id: 10, name: 'diyor', age: 20 },
    { id: 11, name: 'sarvinoz', age: 20 },
    { id: 12, name: 'xuryat', age: 20 },





  ])
  return (
    <div className="App">


      <div className='text-2xl font-bold'>
        <h1>1-24 att talabalari ruyxati</h1>
      </div>

      {data.map((e) => {
        return (
          <div Key={e.id} className='grid grid-cols-3 border-2 w-6xl m-auto mt-4'>
            <p>{e.id}</p>
            <p>{e.name}</p>
            <p>{e.age}</p>

          </div>
        )
      })}


    </div>
  );
}

export default App;
