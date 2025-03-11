import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Todo from './pages/Todo'
import Layout from './shared/layouts/Layout'
import ManagerLayout from './shared/layouts/ManagerLayout'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>}></Route>
        <Route path='/about' element={<Layout><About /></Layout>}></Route>
        <Route path='/contact' element={<Layout><Contact /></Layout>}></Route>
        <Route path='/todo' element={<Layout><Todo/></Layout>}></Route>
        <Route path='/dashboard' element={<ManagerLayout><Dashboard/></ManagerLayout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
