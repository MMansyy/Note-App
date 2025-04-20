import React from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Login from './pages/Login/Login'
import Resgister from './pages/Register/Resgister'
import Home from './pages/Home/Home'

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
        },
        {
          path: '/', element: <Home />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}
