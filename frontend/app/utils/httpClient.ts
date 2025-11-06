import { error } from "console";
import { Depth, Klines, Ticker,Trade } from "./types";
import axios from "axios";
const Base_URL="https//localhost:3000/api/v1";

export const getTicker=async(market:string):Promise<Ticker> => {
    const tickers=await getTickers()
    const ticker=tickers.find(t=>t.symbol==market)
    if (!ticker){
        throw new Error(`no ticker is availbale for ${market}`)
    }
    return ticker
}
export const getTickers= async():Promise<Ticker[]>=>{
    const tickers=await axios.get<Ticker[]>('Base_URL/tickers')
    return tickers.data
}
export const getDepth= async(market:string):Promise<Depth>=>{
    const response= await axios.get<Depth>(`${Base_URL}/depth`,{
        params:{
            symbol:market
        }
    })
    const depth=response.data
    return depth
    
}
export const getKlines= async(market:string,startTime:number,interval:string,endTime:number):Promise<Klines[]>=>{
    const response= await axios.get<Klines[]>(`${Base_URL}/klines`,{
        params:{
            symbol:market,
            interval:interval,
            startTime:startTime,
            endTime:endTime
        }
    })
    const klines=response.data
    return klines
    
}
export async function getTrades(market: string): Promise<Trade[]> {
    const response = await axios.get<Trade[]>(`${Base_URL}/trades`,{
        params:{
            symbol:market
        }
    });
    const k=response.data
    return k;
}