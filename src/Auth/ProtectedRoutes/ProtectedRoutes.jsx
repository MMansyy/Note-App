import React, { useContext } from 'react'
import { TokenContext } from '../../context/TokenContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const { token } = useContext(TokenContext)
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        children
    )
}
