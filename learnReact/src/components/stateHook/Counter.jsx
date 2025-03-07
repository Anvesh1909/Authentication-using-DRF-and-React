import React, { useState } from 'react'

const Counter = () => {

    const [ count , setCount] = useState(0);

    const [ name, setName ] = useState("Anvesh");

    const [ isLoggedIn , setIsLoggedIn ] = useState(false);

    const tongleLogin = () => {
        // setIsLoggedIn(isLoggedIn ? false : true);
        setIsLoggedIn(!isLoggedIn);
    }

    const [ user, setUser ] = useState({ name : "Anvesh" , age : 22 })

    const updateUser = () => {
        setUser({...user,age: user.age+1});
        // setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
    }

    const [ cart , setCart ] = useState([1,2,3]);
    
    const addCart = () => {
        setCart([...cart,cart.length+1]);
        // setCart(prevItems => [...prevItems, newItem]);
    }

    return (
        <div>

            <h2>Counter</h2>
            <hr />

            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count+1)}>Increament</button>
            {/* <button onClick={() => setCount(count => count+1)}>Increament</button> */}
            <hr />

            <h2>Name : {name}</h2>
            <hr />

            <h2>isLoggedIn : { isLoggedIn ? "Logged in " : "Not Logged in"  }</h2>
            <button onClick={tongleLogin}> { isLoggedIn ? "LogOut" : "LogIn"  } </button>
            <hr />

            <h2>User Details {user.name} {user.age}</h2>
            <button onClick={updateUser}>Change user Age</button>
            <hr />

            <h2>cart:  {cart}</h2>

            <ul>{ cart.map( item => <li>{item}</li> ) }</ul>
            <button onClick={addCart}>add to cart</button>

        </div>
    )
}

export default Counter
