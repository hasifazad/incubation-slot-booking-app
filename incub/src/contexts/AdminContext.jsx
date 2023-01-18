import React, { createContext, useState } from 'react'


export let AdminDetailsContext = createContext(null)

function AdminContext({ children }) {
  let [admin, setAdmin] = useState(null)


  return (
    <AdminDetailsContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminDetailsContext.Provider>
  )
}

export default AdminContext