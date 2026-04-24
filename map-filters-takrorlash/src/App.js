import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Title from './component/Title';
function App() {
  const [data, setdata] = useState([
    { id: 1, name: 'aslbek', age: 2, weight: 55 },
    { id: 2, name: 'lobar', age: 11, weight: 48 },
    { id: 3, name: 'mexribon', age: 10, weight: 52 },
    { id: 4, name: 'aynur', age: 8, weight: 60 },
    { id: 5, name: 'shaxrizoda', age: 7, weight: 45 },

    { id: 6, name: 'tuymurod', age: 13, weight: 78 },
    { id: 7, name: 'gulrux', age: 15, weight: 50 },
    { id: 8, name: 'shoxsanam', age: 17, weight: 47 },
    { id: 9, name: 'shoxjaxon', age: 16, weight: 82 },
    { id: 10, name: 'diyor', age: 14, weight: 70 },

    { id: 11, name: 'sarvinoz', age: 19, weight: 49 },
    { id: 12, name: 'xuryat', age: 22, weight: 58 },
    { id: 13, name: 'ali', age: 24, weight: 66 },
    { id: 14, name: 'jaxon', age: 26, weight: 73 },
    { id: 15, name: 'guli', age: 29, weight: 54 },

    { id: 16, name: 'sherzod', age: 33, weight: 62 },
    { id: 17, name: 'shaxzod', age: 34, weight: 59 },
    { id: 18, name: 'samir', age: 42, weight: 41 },
    { id: 19, name: 'samira', age: 46, weight: 88 },
    { id: 20, name: 'asad', age: 52, weight: 67 },
    { id: 21, name: 'anora', age: 54, weight: 53 },
    { id: 22, name: 'alibek', age: 62, weight: 75 },
    { id: 23, name: 'shoxi', age: 60, weight: 46 },
    { id: 24, name: 'diyor', age: 47, weight: 69 },
  ]);

  const [oldata, setoldata] = useState([])

  function dalete(id) {

    const newdata = data.filter((item) => {
      return item.id !== id
    })

    setdata(newdata)
  }


  function mediumweight() {
    let medium = 0
    data.forEach((item) => {
      medium += item.weight
    })
    return Math.floor(medium / data.length)
  }


  function mediumage() {
    let age = 0
    data.forEach((item) => {
      age += item.age
    })
    return Math.floor(age / data.length)
  }


  function heandle12() {
    let arr = oldata
    if (oldata.length == 0) {
      setoldata(data)
      arr = data
    }
    setdata(
      arr.filter((e) => {
        return e.age <= 12
      })
    )
  }

  function heandle1218() {

    let arr = oldata
    if (oldata.length == 0) {
      setoldata(data)
      arr = data
    }
    setdata(
      arr.filter((e) => {
        return e.age >= 12 && e.age <= 18
      })
    )
  }

  function heandle1830() {
    let arr = oldata
    if (oldata.length == 0) {
      setoldata(data)
      arr = data
    }
    setdata(
      arr.filter((e) => {
        return e.age >= 18 && e.age <= 30
      })
    )
  }

  function heandle30() {
    let arr = oldata
    if (oldata.length == 0) {
      setdata(data)
      arr = data
    }
    setdata(
      arr.filter((e) => {
        return e.age > 30
      })
    )
  }





  return (
    <div className="App">


      <Header>
      </Header>

      <h1 className='text-2xl font-bold text-center mt-4'>
        1-24 ATT talabalari ro'yxati
      </h1>

      <Title group='1-26 gruxi' theme="Tailwind css darsi" />

      <h1>salom</h1>




      <div className='w-xl grid grid-cols-3 m-auto mt-4 gap-4 text-2xl text-white rounded-xl '>
        <div className='bg-blue-400'>jami:{data.length}</div>
        <div className='bg-blue-400'>o`rtacha vazn:{mediumweight()}</div>
        <div className='bg-blue-400'>o`rtacha yoshi:{mediumage()}</div>
      </div>


      <div className='mt-4 gap-4 grid grid-cols-4 w-2xl m-auto'>
        <button onClick={() => heandle12()} className='bg-blue-400 p-2 text-white '>12 yoshgacha</button>
        <button onClick={() => heandle1218()} className='bg-blue-400 p-2 text-white '>12-18 yoshgacha</button>
        <button onClick={() => heandle1830()} className='bg-blue-400 p-2 text-white '>18-30 yoshgacha</button>
        <button onClick={() => heandle30()} className='bg-blue-400 p-2 text-white '>30+ yoshgacha</button>

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