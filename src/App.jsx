import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Landing'
import Home from './Home'
import History from './History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <> 
      {/* path for landingg / home / history */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/History' element={<History/>}/>

      </Routes>
      <Footer/>
      
      </>
  )
}

export default App
