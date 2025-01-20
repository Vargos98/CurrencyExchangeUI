// import React from 'react'

const Transactions = () => {
  return (
    <div className="w-[55%] h-[38vh] bg-white px-2">
      <div className="flex items-center justify-between px-2 py-2">
        <h1 className="text-zinc-400 text-xs font-light ">TRANSACTIONS</h1>
        <h2 className="text-zinc-600 text-xs font-light">VIEW ALL</h2>
      </div>
      <div className="flex items-center justify-between px-3  mt-5 ">
        <div className="flex items-center justify-center gap-2">
        <i className="bg-red-200 text-red-400 px-3 py-2 rounded-lg ri-arrow-up-line"></i>
          
          <div className="text flex flex-col px-1 items-center justify-center">
            <h1 className="text-zinc-800 font-regular text-sm -ml-2">Sent BTE</h1>
            <p className="text-zinc-700 font-light text-xs">12 Nov, 2020</p>
          </div>
        </div>
        <div className="values flex flex-col items-center justify-center">
        <h1 className="text-sm text-red-400">-$1,289.00</h1>
      
      </div>
      </div>

      <div className="flex items-center justify-between px-3  mt-5 ">
        <div className="flex items-center justify-center gap-2">
        <i className="bg-zinc-300 text-zinc-600 px-3 py-2 rounded-lg ri-arrow-down-line"></i>
          
          <div className="text flex flex-col px-1 items-center justify-center">
            <h1 className="text-zinc-800 font-regular text-sm ">Received USDT</h1>
            <p className="text-zinc-700 font-light text-xs -ml-8">12 Nov, 2020</p>
          </div>
        </div>
        <div className="values flex flex-col items-center justify-center">
        <h1 className="text-sm">+$1,045.00</h1>
      
      </div>
      </div>

      <div className="flex items-center justify-between px-3  mt-5 ">
        <div className="flex items-center justify-center gap-2">
        <i className="bg-red-200 text-red-400 px-3 py-2 rounded-lg ri-arrow-up-line"></i>
          
          <div className="text flex flex-col px-1 items-center justify-center">
            <h1 className="text-zinc-800 font-regular text-sm -ml-2">Sent BTE</h1>
            <p className="text-zinc-700 font-light text-xs ">12 Nov, 2020</p>
          </div>
        </div>
        <div className="values flex flex-col items-center justify-center">
        <h1 className="text-sm text-red-400">-$2,686.00</h1>
      
      </div>
      </div>
    </div>
  )
}

export default Transactions