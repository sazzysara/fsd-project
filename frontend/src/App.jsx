import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import project from '../src/pages/project'
import task from './pages/task'
import Login from "./pages/login";
import Team from "./pages/team";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Calendar from "./pages/calendar";
import Settings from "./pages/settings";
import Register from "../src/pages/register";


function App() {
  return <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/project' element={<project/>}/>
  <Route path='/task' element={<task/>} />
  <Route path='/team' element={<Team/>} />
  <Route path='/clients'element={<Clients/>} />
  <Route path='/dashboard'element={<Dashboard/>} />
  <Route path='/calendar' element={<Calendar/>}/>
  <Route path="/settings" element={<Settings/>} />
  <Route path="/register" element={<Register/>} />

</Routes>
  </BrowserRouter>
}
export default App