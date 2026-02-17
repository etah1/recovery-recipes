
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer/ >
      </div>
    </>
  )
}

export default App
