import React from 'react'
import Sidebar from '../components/Siderbar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}
