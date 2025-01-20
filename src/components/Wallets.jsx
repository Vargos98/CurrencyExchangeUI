// import React from 'react'

// import Heading from "../Side Components/Heading"

const Wallets = ({data}) => {
  return (
    <div className="bg-white w-[25%] h-[60vh]">
      <div className="flex items-center justify-between px-2 py-2">
        <h1 className="text-zinc-400 text-xs font-light capitalize ">Wallets</h1>
        <h2 className="text-zinc-800 text-xs font-light capitalize">View All</h2>
      </div>

      {data.map((item,index)=>(
        <div key={index} className="flex items-center justify-between px-3  mt-5 ">
        <div className="flex items-center justify-center gap-2">
          <img className={`w-12 rounded-lg ${item.color} px-3 py-3`} src={item.img} alt="" />
          
          <div className="text flex flex-col px-1 items-center justify-center">
            <h1 className="text-zinc-800 font-light text-sm">{item.name}</h1>
            <p className="text-zinc-800 font-light text-xs">{item.currency}</p>
          </div>
        </div>
        <div className="values flex flex-col items-center justify-center">
        <h1 className="text-sm">{item.percentage}</h1>
        <p className="text-xs">{item.bal}</p>
      </div>
      </div>
      ))}
      
    </div>

  )
}

export default Wallets