import { useState, useEffect } from 'react';
import './App.css'

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

function App() {
  const logoImg: string = '/logo.png';
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stockData: Stock[] = [
      { symbol: 'AAPL', name: 'Apple Inc', price: 182.63, change: 1.2, changePercent: 0.66 },
      { symbol: 'MSFT', name: 'Microsoft Corporation', price: 407.86, change: -0.32, changePercent: -0.08 },
      { symbol: 'GOOGL', name: 'Alphabet Inc', price: 171.11, change: 2.14, changePercent: 1.27 },
      { symbol: 'AMZN', name: 'Amazon.com Inc', price: 175.35, change: -1.25, changePercent: -0.71 },
      { symbol: 'TSLA', name: 'Tesla Inc', price: 245.18, change: 5.42, changePercent: 2.26 },
      {symbol: 'NFLX', name: 'Netflix Inc', price: 450.50, change: -5.70, changePercent: +10.15 },
    ];

    // Simulate API call delay
    setTimeout(() => {
      setStocks(stockData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatChange = (change: number, changePercent: number) => {
    const isPositive = change > 0;
    const isZero = change === 0;
    const sign = isPositive ? '+' : (isZero ? '' : '');

    return (
      <span className={`change ${isPositive ? 'Positive' : isZero ? 'Neutral' : 'Negative'}`}>
        {!isZero && sign} {change.toFixed(2)} ({!isZero && sign} {changePercent.toFixed(2)} % )
      </span>
    )
  }

  return (
    <>
      <div className="p-4 bg-gray-800">
        <img src={logoImg} alt="Stock Tracker Logo" className="h-8" />
      </div>

      <nav>
        <div className="p-4 bg-gray-800 text-white">
          <ul className="navi flex space-x-4">
            <li><a href="#">Services</a></li>
            <li><a href="/">Stock Market</a></li>
            <li><a href="#"></a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Develement Team</a></li>
          </ul>
        </div>
      </nav>

      <header className="app">
        <div className="app-header">
          <h1>Stock Market Tracker</h1>
        </div>
      </header>

      <aside>
        <div>
          <h1>Stock News</h1>
          <h3>Follow us for today news about stock market</h3>
          <p>We provide the best and accurate stock market news!</p>
          <p>Our site provide local and international update round the world.</p>

          <div>
            <ul>
              <li><a href="#">News letters</a></li>
              <li><a href="#">Google articles</a></li>
            </ul>
          </div>

          <p>As we continue with delevery global news, our team are working to provide stats for everyday trading.</p>
        </div>
      </aside>
      

      <main className="main-content">
        <div className="stock-container">
          <h2>Popular Stock</h2>

          {loading ? (
            <div className="loading">Loading stocks...</div>
          ) : (
            <div className="stocks-list">
              {stocks.map(stock => (
                <div key={stock.symbol} className="stock-card">

                  <div className="stock-header">
                    <h3 className="stock-symbol">{stock.symbol}</h3>
                    <span className="stock-name">{stock.name}</span>
                  </div>

                  <div className="stock-price">${stock.price.toFixed(2)}</div>
                  <div className="stock-change">
                    {formatChange(stock.change, stock.changePercent)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>

      <article>
        <div>

        </div>
      </article>

      <footer>

      </footer>
    </>
  )
}

export default App;