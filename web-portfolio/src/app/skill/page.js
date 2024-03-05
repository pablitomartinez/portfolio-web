import React from "react";

export default function skill() {
  return (
    <div className="h-dvh p-4 bg-slate-200">
      <div className="bg-slate-200">
        <p className="pb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's .
        </p>
        {/* listado  */}
        <div>
          {/* titulo  */}
          <div className="font-semibold border-t-blue-900">
            Javascript, Level 4 (React.ks)
          </div>
          {/* academia  */}
          <div className="flex">
            <p>HTML Academy /</p>
            <p className="text-[#92d79a]">certificate</p>
          </div>
        </div>
        {/* tecnologias  */}
        <div>
          <p>React</p>
        </div>
        <div>
          {/* titulo  */}
          <div className="font-semibold">Javascript, Level 4 (React.ks)</div>
          {/* academia  */}
          <div className="flex">
            <p>HTML Academy /</p>
            <p className="text-[#92d79a]">certificate</p>
          </div>
        </div>
        {/* tecnologias  */}
        <div>
          <p>React</p>
        </div>
      </div>
    </div>
  );
}
