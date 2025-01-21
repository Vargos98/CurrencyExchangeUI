const Stats = () => {
  return (
    <div className="w-[70%] bg-zinc-600 h-[60vh] flex">
      <div className="left w-[58%] h-full bg-white ">
        <div className="w-[90%] h-[90%] mx-auto mt-4 bg-[#7b60b6] px-2 rounded-3xl">
          <div className="p-5">
            <h3 className="text-white opacity-90 font-medium text-xs">BALANCE DETAILS</h3>
            <h1 className="font-bold text-4xl text-white mt-5">$ 2,16,045.00</h1>
            <h4 className="font-light text-sm mt-1 text-zinc-300">3.34105027 BTC</h4>
          </div>

          <div className="price p-5 -mt-5 flex items-center justify-between">

            <div className="left ">
              <h1 className="font-bold text-lg text-white mt-5">$3,256.00</h1>
              <h4 className="font-regular text-sm  text-zinc-300">Income</h4>
            </div>
            <div className="right mr-10 ">
              <h1 className="font-bold text-lg text-white mt-5">$1,289.00</h1>
              <h4 className="font-regular text-sm  text-zinc-300">Expense</h4>
            </div>

          </div>

          <div className="btn flex items-center justify-center w-full gap-2 mt-2">
            <button className="px-8 py-2 text-sm text-[#7b60b6] bg-zinc-200  rounded-lg hover:bg-zinc-400 hover:text-white">
              RECEIVE
            </button>
            <button className="px-11 py-2 text-sm text-white bg-[#ff8872] rounded-lg hover:bg-orange-700">
              SEND
            </button>

          </div>

        </div>
      </div>
      <div className="right w-[42%] h-full bg-white ">
        <div className="w-[90%] h-[90%] mt-4 bg-white p-8 rounded-2xl">
          <h1 className="text-xs text-zinc-400 ml-4">FEES</h1>
          <div className="bottom mt-5 flex flex-col items-center justify-center gap-5">
            <div className="w-full h-[16vh] bg-zinc-300 p-4 rounded-3xl -ml-12">

              <h1 className="text-3xl text-[#7b60b6]">0.069%</h1>
              <h2 className="text-sm text-[#7b60b6] ">MAKER</h2>

            </div>
            <div className="w-full h-[16vh] bg-zinc-300 p-4 rounded-3xl -ml-12">

              <h1 className="text-3xl text-[#7b60b6]">0.075%</h1>
              <h2 className="text-sm text-[#7b60b6] ">TAKER</h2>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats