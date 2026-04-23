import { useState } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState([
    { id: 1, name: 'aslbek', age: 24, weight: 55 },
    { id: 2, name: 'lobar', age: 24, weight: 48 },
    { id: 3, name: 'mexribon', age: 24, weight: 52 },
    { id: 4, name: 'aynur', age: 24, weight: 60 },
    { id: 5, name: 'shaxrizoda', age: 24, weight: 45 },
    { id: 6, name: 'tuymurod', age: 24, weight: 78 },
    { id: 7, name: 'gulrux', age: 24, weight: 50 },
    { id: 8, name: 'shoxsanam', age: 24, weight: 47 },
    { id: 9, name: 'shoxjaxon', age: 24, weight: 82 },
    { id: 10, name: 'diyor', age: 24, weight: 70 },
    { id: 11, name: 'sarvinoz', age: 24, weight: 49 },
    { id: 12, name: 'xuryat', age: 24, weight: 58 },

    { id: 13, name: 'user13', age: 24, weight: 66 },
    { id: 14, name: 'user14', age: 24, weight: 73 },
    { id: 15, name: 'user15', age: 24, weight: 54 },
    { id: 16, name: 'user16', age: 24, weight: 62 },
    { id: 17, name: 'user17', age: 24, weight: 59 },
    { id: 18, name: 'user18', age: 24, weight: 41 },
    { id: 19, name: 'user19', age: 24, weight: 88 },
    { id: 20, name: 'user20', age: 24, weight: 67 },
    { id: 21, name: 'user21', age: 24, weight: 53 },
    { id: 22, name: 'user22', age: 24, weight: 75 },
    { id: 23, name: 'user23', age: 24, weight: 46 },
    { id: 24, name: 'user24', age: 24, weight: 69 },
  ]);



  function dalete(id) {

    const newdata = data.filter((item) => {
      return item.id !== id
    })

    setdata(newdata)
  }

  return (
    <div className="App">

      <h1 className='text-2xl font-bold text-center'>
        1-24 ATT talabalari ro'yxati
      </h1>



      <div className='w-xl grid grid-cols-3 m-auto mt-4'>
        <div>jami:{data.length}</div>
        <div>o`rtacha vazn</div>
        <div>o`rtacha yoshi</div>
      </div>

      <table className="border-collapse border border-black m-auto mt-5 w-1/2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black p-2">ID</th>
            <th className="border border-black p-2">Name</th>
            <th className="border border-black p-2">Age</th>
            <th className="border border-black p-2">weight</th>
            <th className="border border-black p-2">action</th>

          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td className="border border-black p-2 text-center">{e.id}</td>
              <td className="border border-black p-2 text-center">{e.name}</td>
              <td className="border border-black p-2 text-center">{e.age}</td>
              <td className="border border-black p-2 text-center">{e.weight}</td>

              <td onClick={() => dalete(e.id)} className="border border-black p-2 text-center">

                <i class="fa fa-trash"></i>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;