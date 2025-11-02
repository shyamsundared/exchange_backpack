import Image from "next/image";
import { Marketbar } from "./components/Marketbar";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return <div >
    <div className="bg-base-background-l0 h-screen">
      <div className="flex flex-col"></div>
        <Appbar/>
        <Marketbar></Marketbar>

    </div>
  </div>
   
   
  
}
