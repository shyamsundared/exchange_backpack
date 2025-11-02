"use client"
import { ReactNode } from "react"
type pass={
    children:ReactNode
}
export const Buttonappbar =({children}:pass)=>{
    return <div>
    <div className="px-4">
        <div className="focus:none items-center rounded-lg text-center font-semibold hover:opacity-90 focus:ring-blue-200 focus:outline-hidden disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-md p-0 text-med-emphasis"> {children}</div>

    </div></div>
}