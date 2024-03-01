import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './Constatns'
import Dashboard from './pages/Dashboard'
import Alluser from './pages/Alluser'
import Accounts from './pages/Accounts'

function Router() {
    return (
        <>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.Dashboard}/>}/>
                <Route path={routes.Dashboard} element={<Dashboard/>}/>
                <Route path={routes.Users} element={<Alluser/>}/>
                <Route path={routes.Accounts} element={<Accounts/>}/>
                <Route path='*' element={<Dashboard/>}/>
            </Routes>
        </>
    )
} 

export default Router