import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {

    const [ count , setCount ] = useState(0);


    // use effect rerenders everytime the state changes 
    // useEffect(() => {
    //     console.log(`Count : ${count}`);
    // })


    // useEffects calls only once component mount
    // useEffect(() => {
    //     console.log(`Count : ${count}`);
    // },[])


    // only calls when count state is changed
    useEffect(() => {
        console.log(`Count changed: ${count}`);
    }, [count]);
      

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={ ()=> setCount(count => count+1) }>Increment</button>
        </div>
    )
}

export default UseEffectEx1
