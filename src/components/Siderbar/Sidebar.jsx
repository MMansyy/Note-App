import React from 'react'
import { IoIosAdd } from "react-icons/io";
import AddButton from '../AddButton/AddButton';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='min-w-48 bg-white border-r border-gray-200'>
            <div className='flex flex-col items-center justify-between h-screen py-10 px-4 sticky top-0'>
                <div className=''>
                    <h1 className='text-4xl font-bold text-gray-800 mb-8'>Docket</h1>

                    <ul className='space-y-3 w-full'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='w-full'>
                    <AddButton />
                </div>
            </div>
        </div>
    );
}
