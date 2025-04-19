import React from 'react'
import { IoIosAdd } from "react-icons/io";
import AddButton from '../AddButton/AddButton';

export default function Sidebar() {
    return (
        <div className='min-w-44 border-r-1  border-gray-300 '>
            <div className='flex flex-col  items-center justify-center h-screen text-white'>
                <h1 className='text-2xl font-bold text-black mb-4'>Docket</h1>
                <AddButton />
            </div>



        </div>
    )
}
