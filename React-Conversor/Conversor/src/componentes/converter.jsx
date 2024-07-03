import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/26df701c9053af33ff4ec9b9/latest/USD')
      .then(response => response.json())
      .then(data => {
        const firstCurrency = Object.keys(data.conversion_rates)[0];
        setCurrencies([data.base_code, ...Object.keys(data.conversion_rates)]);
        setExchangeRate(data.conversion_rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://v6.exchangerate-api.com/v6/26df701c9053af33ff4ec9b9/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.conversion_rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertedAmount = amount * exchangeRate;

  return (
    <div>
      <h1>Conversor de Moneda</h1>
      <div>
        <input 
          type="number" 
          value={amount} 
          onChange={handleFromAmountChange} 
        />
        <select 
          value={fromCurrency} 
          onChange={handleFromCurrencyChange}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>A</span>
        <select 
          value={toCurrency} 
          onChange={handleToCurrencyChange}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <h2>{amount} {fromCurrency} Es equivalente a {convertedAmount.toFixed(2)} {toCurrency}</h2>
    </div>
  );
};

export default CurrencyConverter;
