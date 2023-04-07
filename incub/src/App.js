import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PrivateRoutes from './utils/PrivateRoutes'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AdminContext from './contexts/AdminContext'
import Application from './components/Application/Application'
import DashBoardPage from './pages/DashBoardPage'
import RecordTrackingPage from './pages/RecordTrackingPage'

import SlotBookingPage from './pages/SlotBookingPage'
import Header from './components/Header/Header'
import AdminPanel from './components/AdminPanel/AdminPanel'

function App() {
  return (
    <AdminContext>
      <Header />
      <div className='app-body'>
        <AdminPanel />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<DashBoardPage />} />
            <Route path='/recordlist' element={<RecordTrackingPage />} />
            <Route path='/bookingslot' element={<SlotBookingPage />} />
          </Route>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/application' element={<Application />} />
        </Routes>
      </div>
    </AdminContext>
  )
}

export default App