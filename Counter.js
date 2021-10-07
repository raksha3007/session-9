import React,{useState} from 'react';


const Counter = () => {
  const state = useState();
    //console.log(state);
    const [count, setCount] = useState(0);
    const IncNum = ()=>{
      setCount(count + 1);
     // console.log("clicked");
    };
    const DecNum = ()=>{
      setCount(count - 1);
     // console.log("clicked");
    };

  return(
    <>
    <h1> {count}</h1>
    <button onClick= {IncNum}> + </button>
    <button onClick= {DecNum}> - </button>
    </>
  );
  };

export default Counter;
