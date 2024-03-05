import React from "react";

export default function Header() {
  return (
    <div className="h-screen bg-slate-300 flex flex-col justify-center space-y-3 p-4">
      <h1 className="text-2xl text-center">
        Soy Full stack Developer de Jujuy, Argentina
      </h1>
      <div className="flex justify-center">
        I don't like define myself by the work l've done. I define myself by the
        work l want to do
      </div>
      <div className="flex justify-center">
        <button className="w-28 border-2 py-2 bg-slate-500">HIRE ME</button>
      </div>
    </div>
  );
}
