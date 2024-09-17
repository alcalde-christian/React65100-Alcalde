import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Sitio en construcción"}/> }/>
          <Route path="/category/:id" element={ <ItemListContainer greeting={"Sitio en construcción"}/> }/>
          <Route path="/product/:id" element={ <ItemDetailContainer /> }/>
          <Route path="*" element={ <h1>Error 404: Página no encontrada</h1> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
