import React from "react"
interface ButtonProp  {
  button_value: string,
  
};

export default function Button({button_value}:ButtonProp) {
    return (
      <div className="flex items-center text-ellipsis overflow-hidden">
      <button className="px-4 py-2  text-white font-bold  rounded-md  bg-stone-700 hover:bg-stone-950">
      {button_value}
    </button>
    </div>
    );
    
  }