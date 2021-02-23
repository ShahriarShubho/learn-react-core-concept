import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {
    name : "shubho"
  }

  const product = [{
    name: "PhotoShope",
    price : "$200",
  },
  { name: "Pdf reader",
  price : "$100",
}
]

const friends = [{
  name : "shubho",
  age : 22,
  cgpa: 3.18
},
{
  name : "Tom",
  aga : 25,
  cgpa : 2.36
}

]
 
const heros = ["shubho", "tom", "boss", "tasfia", "east"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Count></Count>
        <Users></Users>

        <h3>My name is {person.name}</h3>
        <p style = {{  color : "green"}}>This is shubho</p>

        <ul>
       {heros.map(hero => <li>{hero}</li> )}
        </ul>
        { product.map(product => <Products product = {product}></Products> )}
        {/* <Products product = {product[0]}></Products>
        <Products product = {product[1]}></Products> */
        }
        {friends.map(friend => <Friends friends={friend}></Friends>)}


      </header>
    </div>
  );
}

function Count(props) {
  const [count, setCount] = useState(0)
  const handleCount = () =>{
    const newCount = count-1;
    if(newCount<0){
      setCount(0)
    }else{
      setCount(newCount)
    }
    
  }
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleCount}>IsDecrease</button>
      <button onClick={() => setCount(count+1)}>IsIncrease</button>
    </div>
  )
  
}

function Users() {

 const [users, setUser] = useState([])
 useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .than(res => res.json())
   .than(data =>setUser(data))

 })

  return (
    <div>
      <h3>Dynamic Users : {users.length} </h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
        {users.map(user => <li>{user.email}</li>)}
      </ul>
    </div>
  )
  
}

function Friends(props) {
  const {name, cgpa, age} = props.friends
  return (
    <div>
    <h3>Name : {name}  </h3>
    <h3>age : {age} </h3>
    <h3>cgpa : {cgpa} </h3>
    </div>
  )
}

function Products(props){
  const productStyle ={
    width : '400px',
    height : '400px',
    backgroundColor : "lightgrey",
    margin : '10px',
    color: "black",
  }
 const {name , price} = props.product;
  return(
    <div style = {productStyle}>
      <h4>Name : {name} </h4>
      <h5>Price : {price} </h5>
      <p>Lorem ipsum dolor sit .
      </p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
