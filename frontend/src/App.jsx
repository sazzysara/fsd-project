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
import Admin from "./pages/admin/adminLayout";
import AdminDashboard from "./pages/admin/Adashboard";
import Details from "./pages/admin/AuserDetails";
import AdminSettings from "./pages/admin/Asettings";


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
  <Route path="/admin" element={<Admin/>}>
    <Route path="adminDashboard" element={<AdminDashboard/>} />
    <Route path="userDetails" element={<Details/>} />
    <Route path="settings" element={<AdminSettings/>} />
  </Route>

</Routes>
  </BrowserRouter>
}
export default App