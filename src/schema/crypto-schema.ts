import z, { string } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CriptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const CriptosCurrencyResponseSchema = z.array(CriptoCurrencyResponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: string(),
    LOWDAY: string(),
    CHANGEPCT24HOUR: string(),
    LASTUPDATE: string()

})