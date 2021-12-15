import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>

  );
}

function Counter(){
  const [count,setCount]=useState(10);
  const handelIncrease=()=>setCount(count+1);
  // {
    // const newCount=count+1;
    // setCount(newCount);
  // }
  const handelDecrease=()=>setCount(count-1);
  // {
  //   // const newCount=count-1;
  //   setCount(count-1);
  // }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    // console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[]);
  return (
    <div>
      <h1>Dynamic User:{users.length}</h1>
     {/* {
        console.log(users)
      }
      <h3>Name: {users[0].name}</h3> */}
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user=><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
