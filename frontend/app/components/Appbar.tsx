import { Buttonappbar } from "./Buttonappbar"
export const Appbar =()=>{
    return <div>
        <div className="bg-base-background-l0 sticky text-amber-50 top-0 z-20 w-full">
            <div className="flex justify-start">
                <div className="flex py-4 h-14 justify-center">
                <div className="py-1 px-4 text-s font-bold">Backpack</div>
                <Buttonappbar>Spot</Buttonappbar>
                <Buttonappbar>Futures</Buttonappbar>
                <Buttonappbar>Lend</Buttonappbar>
                <Buttonappbar>More</Buttonappbar>

            </div>
            </div>
        </div>
        
    </div>
}