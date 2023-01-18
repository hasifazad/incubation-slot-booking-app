import React from 'react'
import AdminPanel from '../components/AdminPanel/AdminPanel'
import Header from '../components/Header/Header'
import SlotBooking from '../components/SlotBooking/SlotBooking'

function SlotBookingPage() {
    return (
        <div className='layout'>
            <div className='layout-box1'>
                <Header />
                <div className='layout-box2'>
                    <AdminPanel />
                    <div className='layout-box21'>
                        <SlotBooking />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlotBookingPage