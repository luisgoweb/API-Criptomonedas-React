import z from "zod";
import { CurrencySchema } from "../schema/Crypto-schema";

export type Currency = z.infer< typeof CurrencySchema>