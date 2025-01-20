// import React from 'react'

import Navbar from "./components/Navbar"
import Security from "./components/Security"
import Sidebar from "./components/Sidebar"
import Stats from "./components/Stats"
import Transactions from "./components/Transactions"
import Wallets from "./components/Wallets"

const App = () => {
  return (
    <div className='max-w-screen-lg mx-auto bg-black relative'>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Stats />
          <Transactions />
        </div>
        
      </div>
      <div className="flex w-full flex-col absolute top-[5.3rem] left-[65%]">
          <Wallets />
          <Security />
        </div>
    </div>
  )
}

export default App