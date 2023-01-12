import Navbar from "./component/Navbar"
import Contacts from "./component/Contacts"
import Home from "./component/Home"
import Form from "./component/Form"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contacts/>} />
          <Route path="/2" element={<Form/>} />
        </Routes>
      </div>
    </>
  )
}

export default App