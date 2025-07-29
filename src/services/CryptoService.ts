import axios from "axios"
import { CriptosCurrencyResponseSchema } from "../schema/crypto-schema"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    const resutl = CriptosCurrencyResponseSchema.safeParse(Data)
    if(resutl){
        return resutl.data
    }
}