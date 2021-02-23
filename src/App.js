import logo from './logo.svg';
import './App.css';

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
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>My name is {person.name}</h3>
        <p style = {{  color : "green"}}>This is shubho</p>
        <Products product = {product[0]}></Products>
        <Products product = {product[1]}></Products>

      </header>
    </div>
  );
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
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
