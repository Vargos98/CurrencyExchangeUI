// import React, { useState } from 'react';
import React, { useState } from 'react';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-[15%] bg-zinc-400 h-[95vh] flex items-center justify-between pt-20 flex-col">
      <div className="top flex justify-center items-center gap-10 flex-col">
        <button
          className={`text-black text-3xl ri-home-line ${
            activeButton === 'home' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleButtonClick('home')}
        />
        <button
          className={`text-black text-3xl ri-expand-diagonal-line ${
            activeButton === 'expand' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleButtonClick('expand')}
        />
        <button
          className={`text-black text-3xl ri-donut-chart-line ${
            activeButton === 'chart' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleButtonClick('chart')}
        />
      </div>
      <div className="bottom mb-20">
        <button className="text-white hover:bg-purple-700 bg-violet-500 px-3 py-1 text-4xl rounded-lg">+</button>
      </div>
    </div>
  );
};

export default Sidebar;
