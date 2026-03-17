import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserAuth from '../pages/auth/UserAuth'
import PartnerAuth from '../pages/auth/PartnerAuth'
import HomePage from '../pages/HomePage'


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth/user" element={<UserAuth />} />
                <Route path="/auth/partner" element={<PartnerAuth />} />
            </Routes>
        </Router>
    )
}

export default AppRouter