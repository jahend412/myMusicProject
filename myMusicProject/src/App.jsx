import React from 'react'
import NavBar from '/src/components/NavBar'
import MainView from '/src/components/MainView'
import Footer from '/src/components/Footer'

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <MainView />
      <Footer />
    </div>
  )
}