import React from 'react'
import './Style.css'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import Header from '../components/Header/Header'
import RecordList from '../components/RecordList'

function RecordTracking() {
    return (
        <div className='layout'>
            <div className='layout-box1'>
                <Header />
                <div className='layout-box2'>
                    <AdminPanel />
                    <div className='layout-box21'>
                        <RecordList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordTracking