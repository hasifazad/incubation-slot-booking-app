import React from 'react'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import DashBoard from '../components/DashBoard/DashBoard'
import Header from '../components/Header/Header'
import './Style.css'

function DashBoardPage() {
    return (
        <div className='layout'>
            <div className='layout-box1'>
                <Header />
                <div className='layout-box2'>
                    <AdminPanel />
                    <div className='layout-box21'>
                        <DashBoard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPage