import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

const CryptopriceDisplay = () => {

   const result = useCryptoStore((store)=> store.result)
   const loading = useCryptoStore((store)=> store.loading)
   const hasResult = useMemo(()=> !Object.values(result).includes('')  , [result])

  return (
    <div className="result-wrapper">
        {loading ? <Spinner /> : hasResult && (
            <>
            
            <h2>Cotización</h2>

         <div className="result">
            <img  
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Imagen Crypto Compare"
                width={200}
            />

            <div>
                <p>El precio es de: <span>{result.PRICE}</span></p>
                <p>El precio más alto del día : <span>{result.HIGHDAY}</span></p>
                <p>El precio más bajo del día : <span>{result.LOWDAY}</span></p>
                <p>Variación en las últimas 24 horas : <span>{result.CHANGEPCT24HOUR}</span></p>
                <p>Última Actualización: <span>{result.LASTUPDATE}</span></p>
            </div>

        </div>
            
            
            </>
        )}
        
    </div>
  )
}

export default CryptopriceDisplay
