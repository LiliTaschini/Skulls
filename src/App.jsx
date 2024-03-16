
import './index.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemList } from './components/ItemList/ItemList.jsx'
import { Home } from './components/Home/Home';
import { Modal } from './components/Item/Modal'


function App() {
  const messages = ["Welcome to SKULLS", "Explore the Unknown, Join the Adventure", "Take advantage of our 40% discounts for members and associates"];
  return (
      <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about-us' element={ <Home/> }  />
          <Route path='/category/:categoryId' element={ <ItemList /> } />
          <Route path='/category/:categoryId/:itemId' element={ <Modal/> } />
          <Route path='/support' element={ <ItemListContainer greeting={messages}/> } />
          <Route path='*' element={ <h1>404 - NOT FOUND</h1> } />
          <Route/>
       
        </Routes>
        </BrowserRouter>
      
      </>
  )
}

export default App
