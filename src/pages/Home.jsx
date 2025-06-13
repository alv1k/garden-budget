import { useEffect, useState } from 'react';

const Home = () => { 
   
  const [data, setData] = useState([]);

  useEffect(() => {
    // garden-budget.test.tools/www/garden-budget.test.tools/api/data.php
    fetch('./api/data.php') // Будет проксироваться через Vite
      .then(res => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    console.log(data, 'data');

  }, [data])
  
  const check = () => {
    try {
      fetch('./api/data.php')
        .then(res => {
          console.log(res, 'resssssss');
          
          // res.json()
        })
        .then(setData);
    } catch {
      console.log('catch');
    }
  }

  // php -S localhost:8000 -t .

  return (
    <div className="bg-[#DDE5B6] w-7/9 mx-auto h-[100vh] p-10">
      <div className="flex text-center mx-auto">
        <h1>Ваш сад </h1>
        <input type="text" className="bg-red-900 rounded-md" />
      </div>
      <button onClick={() => check()}>
        test
      </button>
      {
        data && 
        <div>
          {data.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      }
    </div>
  )
}
export default Home;