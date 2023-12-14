import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard";
import Confirm from "./pages/Confirm";
import Coinadd from "./pages/Coinadd";

function App() {

  return (
    <>
     <BrowserRouter>
     <ToastContainer position='bottom-left'/>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/confirm_email" element={<Confirm/>}/>
      <Route path="/add_coin" element={<Coinadd/>}/>
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
