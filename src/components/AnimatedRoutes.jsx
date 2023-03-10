import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ContactUs from "./EmailForm"
import Home from "./home"
import Gallery from "./gallery"
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/EmailForm" element={<ContactUs />} />
            <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes