import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='HomePage'>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
