// import React, { useState } from 'react';
import  { useState } from 'react';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-[15%] bg-white h-[98vh] flex items-center justify-between pt-20 flex-col">
      <div className="top flex justify-center items-center gap-10 flex-col">
        <button
          className={`text-black rounded-md px-2 py-2 text-3xl ri-home-line ${
            activeButton === 'home' ? 'bg-[#ff8872]'  : ''
          }`}
          onClick={() => handleButtonClick('home')}
        />
        <button
          className={`text-black text-3xl px-2 py-2  rounded-md ri-expand-diagonal-line ${
            activeButton === 'expand' ? 'bg-[#ff8872]'  : ''
          }`}
          onClick={() => handleButtonClick('expand')}
        />
        <button
          className={`text-black text-3xl px-2 py-2 ri-donut-chart-line rounded-md ${
            activeButton === 'chart' ? 'bg-[#ff8872]' : ''
          }`}
          onClick={() => handleButtonClick('chart')}
        />
      </div>
      <div className="bottom mb-20">
        <button className="text-white hover:bg-[#846fb3] bg-[#5c4e7a] px-3 py-1  rounded-lg"><span className='text-center text-4xl'>+</span></button>
      </div>
    </div>
  );
};

export default Sidebar;
