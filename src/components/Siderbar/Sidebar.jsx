import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';
import { FiLogOut } from 'react-icons/fi';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { token, setToken } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsOpen(false);
        navigate('/login');
    };

    return (
        <>
            {/* زرار الموبايل (الهامبورجر) */}
            <div className="lg:hidden fixed p-4 z-50">
                <button onClick={() => setIsOpen(true)} className="text-2xl">
                    ☰
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 lg:static lg:block`}
            >
                <div className='flex flex-col justify-between h-screen py-10 px-4 sticky top-0'>

                    {/* الأعلى */}
                    <div>
                        <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>Docket</h1>

                        <ul className='space-y-3 w-full'>
                            {token && (
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                                ? 'bg-black text-white'
                                                : 'text-gray-700 hover:bg-gray-100'}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                            )}

                            {!token && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                                    ? 'bg-black text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'}`
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 rounded-md text-sm text-center font-medium transition-colors ${isActive
                                                    ? 'bg-black text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'}`
                                            }
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    {token && (
                        <button
                            onClick={handleLogout}
                            className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-md text-sm font-medium transition"
                        >
                            <FiLogOut className="text-lg" />
                            Logout
                        </button>
                    )}

                </div>

                <button className="lg:hidden absolute top-4 right-4 text-2xl" onClick={() => setIsOpen(false)}>×</button>
            </div>
        </>
    );
}
