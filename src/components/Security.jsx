// import React from 'react'

const Security = () => {
  return (
    <div className="bg-white w-[25%] h-[38vh] px-2">
      <div className="flex items-center justify-between px-2 py-2">
        <h1 className="text-zinc-400 text-sm ">SECURITY</h1>
        <h2 className="text-zinc-400 text-xs">VIEW ALL</h2>
      </div>


      <div className="mt-4" >
        <div className="top flex items-center justify-between px-3 border-2 border-zinc-300 py-3 rounded-xl ">
          <div className="left">
            <h1 className="text-sm text-zinc-400 font-medium">Identity</h1>
            <h2 className="text-xs text-xinc-400 font-light">Disable</h2>
          </div>
          <div className="right">

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-zinc-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-400"></div>
            </label>


          </div>
        </div>
      </div>
      <div className="mt-4" >
        <div className="top flex items-center justify-between px-3 border-2 border-zinc-300 py-3 rounded-xl ">
          <div className="left">
            <h1 className="text-sm text-zinc-400 font-medium">Phone</h1>
            <h2 className="text-xs text-xinc-400 font-light">Enable</h2>
          </div>
          <div className="right">

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-zinc-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-400"></div>
            </label>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Security