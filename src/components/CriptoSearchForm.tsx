

const CriptoSearchForm = () => {
  return (
    <form className="form">

        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select id="currency" name="currency">
                <option value="">-- Seleccione --</option>
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select id="criptocurrency" name="currency">
                <option value="">-- Seleccione --</option>
            </select>
        </div>

        <input 
            type="submit"
            value="Cotizar"
        />

    </form>
  )
}

export default CriptoSearchForm
