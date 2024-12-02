import { currencies } from "../data";

export default function CriptoSearchForm() {
    return (
        <form className="form" action="">
            <div className="field">
                <label htmlFor="currency">Moneda: </label>
                <select
                    id="currency"
                    name="currency"
                >
                    <option value="" disabled defaultValue={''}>-- Seleccione --</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptoCurrency">Cripto Moneda: </label>
                <select
                    id="criptoCurrency"
                    name="criptoCurrency"
                >
                    <option value="" disabled defaultValue={''}>-- Seleccione --</option>
                </select>
            </div>
            <input type="submit" value="Cotizar" />
        </form>
    )
}