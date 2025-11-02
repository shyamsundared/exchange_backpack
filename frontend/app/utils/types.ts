export interface Trade
  {
    "id": number;
    "price": string;
    "quantity": string
    "quoteQuantity": string
    "timestamp": number
    "isBuyerMaker": boolean
  }
export interface Klines
  {
    "start": string;
    "end": string
    "open": string
    "high": string
    "low": string
    "close": string
    "volume": string
    "quoteVolume": string
    "trades": string
  }
export interface Ticker{
  "symbol": string;
  "firstPrice": string;
  "lastPrice": string
  "priceChange": string
  "priceChangePercent": string
  "high": string
  "low": string
  "volume":string
  "quoteVolume": string
  "trades": string
}
export interface Depth{
  "asks": [string,string][]
  "bids": [string,string][]
  
  "lastUpdateId": string,
  
}