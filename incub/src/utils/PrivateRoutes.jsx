import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useContext } from 'react'
import Axios from "axios";
import { AdminDetailsContext } from "../contexts/AdminContext";
import LoginForm from "../components/LoginForm";



function PrivateRoutes() {
  let { admin, setAdmin } = useContext(AdminDetailsContext)

  const token = localStorage.getItem('jwttoken')
  const headers = {
    'Content-Type': 'application/json',
    'authorization': token
  }

  const navigate = useNavigate()

  useEffect(() => {
    Axios.get('http://localhost:4000/admin/verify', { headers }).then((response) => {
      console.log('verify', response);
      setAdmin(response.data.admin)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    admin ? <Outlet /> : <LoginForm />
  )


}

export default PrivateRoutes