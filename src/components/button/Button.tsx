import type { FC } from "react";


const Button:FC = ()=>{
    return (
        <button className="rounded-md w-85 h-10 bg-[#FFCE22] cursor-pointer hover:bg-[#FFD84D] active:bg-[#FFCE22]">
            <div className="text-[#1F2128] text-sm font-normal">Done</div>
        </button>
    )
}

export default Button