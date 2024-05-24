import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Cources from "./pages/Cources"
import Playground from "./pages/Playground"
import AuthProvider from "./contexts/AuthProvider"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cources" element={<Cources/>} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" />
    </AuthProvider>
  )
}

export default App
