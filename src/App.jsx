import Footerhome from "./components/Footer/Footer"
import Headerhome from "./components/Header/Header"
import Mainhome from "./components/Main/Main"
import './App.css'

function App() {

  return (
    <>
    <div className="Cuerpo">
      <Headerhome />
      <Mainhome />
      <Footerhome />
    </div>
    </>
  )
}

export default App