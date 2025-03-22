import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './components/Mybutton'
import MyProfile from './components/MyProfile'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('K.Mook')
  const [ifTrue, setIfTrue] = useState(true)
 
  const user ={
    FirstName: "Ariana",
    LastName: "Grande",
    imgPic:"https://media.vanityfair.com/photos/66396980afc435c3cf2f7bbe/master/w_2560%2Cc_limit/2151790748"
  }

  const product = [
    {title: 'Cabbage', isFruit: false, id:1},
    {title: 'Carrot',isFruit: false, id:2},
    {title: 'Cucumber',isFruit: true, id:3},
  ]

  function handleIncreaseClaick() {
    setCount(count + 1)
  }

  function handleDecareseClack() {
    setCount(count - 1)
  }
  

  return (
    <>
    <Api/>
    <h1 style={{color:'red'}}>Welcome to my app</h1>
    <MyProfile data={user}/>

    <p>My name is {user.FirstName} {user.LastName}</p>
    <img src={user.imgPic} width="300" alt={user.FistName} />
    
    <p>{count}</p>
    
    <button onClick={handleIncreaseClaick}>Increase </button>
    &nbsp;
    <button onClick={handleDecareseClack}>Decrease</button>
    &nbsp;
    
     <Mybutton/>
     &nbsp;
     {/* การเช็คเงื่อนไขแบบบรรทัดเดียว (ternary operator) */}
     {ifTrue? "Yes it's true": "No it's false"}
     <ul>
      {product.map(item => (
        <li key={item.id} style={{color:item.isFruit? 'magenta':'darkblue'}}>{item.title}</li>
      ))}
     </ul>

     <center>
     <table broder='1' width='200px'>
      <thead></thead>
      <tbody>
      {
        product.map(
          (item, index) => (
              <tr style={{backgroundColor: item.isFruit? "magenta" : "darkgreen"}} key={index}> 
                <td>{item.id}:{item.title}</td>
                <td><a href=''>Edit</a></td>
                <td><a href=''>Delete</a></td>
            </tr>
          )
        )
       
      }
      </tbody>
      </table>
     </center>
     
    
    </>
  )
}

export default App
