import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import PrivateRoutes from './utils/PrivateRoutes'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AdminContext from './contexts/AdminContext'
import Application from './components/Application/Application'
import DashBoardPage from './pages/DashBoardPage'
import RecordTracking from './pages/RecordTrackingPage'

import SlotBookingPage from './pages/SlotBookingPage'

function App() {
  return (
    <AdminContext>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<DashBoardPage />} />
          <Route path='/recordlist' element={<RecordTracking />} />
          <Route path='/bookingslot' element={<SlotBookingPage />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/application' element={<Application />} />
      </Routes>
    </AdminContext>
  )
}

export default App