import React from 'react'
import Sidebar from './components/Siderbar/Sidebar'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Login from './pages/Login/Login'
import Resgister from './pages/Register/Resgister'

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />,
      children: [
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Resgister />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}
