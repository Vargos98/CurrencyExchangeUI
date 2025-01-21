// import React from 'react'

import Navbar from "./components/Navbar"
import Security from "./components/Security"
import Sidebar from "./components/Sidebar"
import Stats from "./components/Stats"
import Transactions from "./components/Transactions"
import Wallets from "./components/Wallets"

const App = () => {
  const wallet = [
    {
      img: "https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png",
      name: "BTE",
      currency: "Bitcoin",
      percentage: "37%",
      bal: "-2.5%",
      color:"bg-yellow-200"
    },
    {
      img: "https://images.seeklogo.com/logo-png/45/2/dai-dai-logo-png_seeklogo-452465.png",
      name: "DAI",
      currency: "Dai",
      percentage: "23%",
      bal: "+7.2%",
      color:"bg-orange-200"
    },
    {
      img: "https://images.seeklogo.com/logo-png/32/2/ripple-xrp-logo-png_seeklogo-329736.png",
      name: "XRP",
      currency: "Ripple",
      percentage: "20%",
      bal: "-3.1%",
      color:"bg-blue-200"
    },
    {
      img: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      name: "USDT",
      currency: "Tether",
      percentage: "17%",
      bal: "+1.8%",
      color:"bg-green-200"
    },
  ];
  
return (
  <div className='max-w-screen-lg mx-auto bg-white relative p-10'>
    <Navbar />

    <div className="flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Stats />
        <Transactions />
      </div>

    </div>
    <div className="flex w-full flex-col absolute top-[10.3rem] left-[71%]">
      <Wallets data={wallet} />
      <Security />
    </div>
  </div>
)
}

export default App