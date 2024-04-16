/* eslint-disable no-unused-vars */
import './App.css'
import Mudanzascasifree from './Mudanzascasifree'
import CartWidget from './assets/CartWidget'
import CompFn from './assets/CompFn'
import NavBar from './assets/NavBar'
import Opcionesdemudanza from './assets/Opcionesdemudanza'

function App() {

  return (
    <div className="container">
        <Mudanzascasifree />
        <Opcionesdemudanza />
        <NavBar />
        <CompFn />
        <CartWidget />
      </div>
  )
}

export default App
 