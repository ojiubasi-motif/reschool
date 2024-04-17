import React from "react";
import { GiBookCover, GiMoneyStack } from "react-icons/gi";

const StatsAndIssues = () => {
  return (
    <div className="min-h-[98%] basis-3/12 flex flex-col justify-between">
      <div className="flex items-center justify-evenly p-2 h-[35%] shadow-defaultShadow rounded-md">
        <div className="flex flex-col h-[50px] w-[80px] items-center justify-between">
          <p className="font-extrabold text-2xl bg-red-100 p-2 rounded-sm text-red-500 flex justify-center items-center">
            <GiBookCover />
          </p>
          <span className="mt-4 flex flex-col justify-center items-center">
            <p className="italic text-textColorGray font-medium">cumm. score</p>
            <h1 className="font-extrabold text-2xl text-green-600">75%</h1>
          </span>
        </div>
        <div className="w-[0.5px] border border-gray-200 h-[90%]"/>
        <div className="flex flex-col h-[50px] w-[80px] items-center justify-between">
          <p className="font-extrabold text-2xl bg-yellow-100 p-2 rounded-sm text-yellow-500 flex justify-center items-center">
            <GiMoneyStack />
          </p>
          <span className="mt-4 flex flex-col justify-center items-center">
            <p className="italic text-textColorGray font-medium">tuition paid</p>
            <h1 className="font-extrabold text-2xl text-blue-600">100%</h1>
          </span>
        </div>
      </div>
      {/* ===issues===== */}
      <div className="h-[61%] shadow-defaultShadow rounded-md">
        
      </div>
    </div>
  );
};

export default StatsAndIssues;
