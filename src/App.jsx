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
      color:"bg-yellow-500"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCE8Lgbhy4J9u-j0UgoXNIF_wC9XM0QPVi2w&s",
      name: "DAI",
      currency: "Dai",
      percentage: "23%",
      bal: "+7.2%",
      color:"bg-orange-500"
    },
    {
      img: "https://images.seeklogo.com/logo-png/32/2/ripple-xrp-logo-png_seeklogo-329736.png",
      name: "XRP",
      currency: "Ripple",
      percentage: "20%",
      bal: "-3.1%",
      color:"bg-blue-300"
    },
    {
      img: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      name: "USDT",
      currency: "Tether",
      percentage: "17%",
      bal: "+1.8%",
      color:"bg-green-500"
    },
  ];
  
return (
  <div className='max-w-screen-lg mx-auto bg-zinc-100 relative p-10'>
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