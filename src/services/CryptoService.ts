import axios from "axios"
import { CriptosCurrencyResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"


export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    const resutl = CriptosCurrencyResponseSchema.safeParse(Data)
    if(resutl){
        return resutl.data
    }
}

export const fetchCurrentCryptoPrince = async (pair: Pair) => {
     const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
     const { data: {DISPLAY} } = await axios(url)
     const resutl = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
     if(resutl.success){
        return resutl.data
     }
}
