import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Sitio en construcción"}/>
      <ItemCount initial={1} stock={10} onAdd={(qty) => console.log("Cantidad agregada ", qty)}/>
    </div>
  )
}

export default App
