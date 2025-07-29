import z from "zod";
import { CriptoCurrencyResponseSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema";

export type Currency = z.infer< typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CriptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>

