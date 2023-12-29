import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-[60px] min-h-screen  bg-[#FFCC70] justify-center px-[100px] py-16">
      <div className="container-form mt-40">
        <div className="container-form-head bg-[#FFFFFF] w-full rounded-lg flex flex-col justify-center items-center py-10">
          <div>
            <p className="text-center text-3xl text-[#00ff7f] font-bold">
              The Decision Detox <br />
              <span className="text-[#666666]">
                starts tonight with your <br /> personal meal plan.
              </span>
            </p>
          </div>
        </div>
        <div className="container-form-body bg-[#ebebf6] w-full rounded-lg flex flex-col items-center justify-center py-10 gap-8 ">
          <div className="text-center flex justify-center  w-full items-center flex-col gap-3">
            <p>How many people are you looking for?</p>
            <div className="h-[44px]  w-[30%] border-[2px] px-[14px] flex items-center bg-white border-[#D0D3D9] border-none">
              <select className="w-full h-full outline-none bg-transparent">
                <option>1 People</option>
                <option>2 People</option>
                <option>3 People</option>
              </select>
            </div>
          </div>
          <div className="text-center flex justify-center  w-full items-center flex-col gap-3">
            <p>What's your cooking style?</p>
            <div className="h-[44px]  w-[30%] border-[2px] px-[14px] flex items-center bg-white border-[#D0D3D9] border-none">
              <select className="w-full h-full outline-none bg-transparent">
                <option>1 option</option>
                <option>2 option</option>
                <option>3 option</option>
              </select>
            </div>
          </div>
          <div className="text-center flex justify-center  w-full items-center flex-col gap-3">
            <p>Choose your favorite cuisine?</p>
            <div className="h-[44px]  w-[30%] border-[2px] px-[14px] flex items-center bg-white border-[#D0D3D9] border-none">
              <select className="w-full h-full outline-none bg-transparent">
                <option>1 option</option>
                <option>2 option</option>
                <option>3 option</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00ff7f] p-2 text-white rounded-md">
              Generate Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
