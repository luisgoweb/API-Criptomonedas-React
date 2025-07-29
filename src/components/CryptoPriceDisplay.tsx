import { useMemo } from "react"
import { useCryptoStore } from "../store"

const CryptopriceDisplay = () => {

   const result = useCryptoStore((store)=> store.result)
   const hasResult = useMemo(()=> !Object.values(result).includes('')  , [result])

  return (
    <div className="result-wrapper">
        {hasResult && (
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
                <p>El precio es de: <span>{result.HIGHDAY}</span></p>
                <p>El precio es de: <span>{result.LOWDAY}</span></p>
                <p>El precio es de: <span>{result.CHANGEPCT24HOUR}</span></p>
                <p>El precio es de: <span>{result.LASTUPDATE}</span></p>
            </div>

        </div>
            
            
            </>
        )}
        
    </div>
  )
}

export default CryptopriceDisplay
