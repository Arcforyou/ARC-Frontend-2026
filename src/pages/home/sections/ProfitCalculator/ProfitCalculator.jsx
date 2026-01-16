import { useState } from 'react';
import { Container, Button } from '../../../../components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ProfitCalculator.scss';

const ProfitCalculator = () => {
  const [accountSize, setAccountSize] = useState(50000);
  const [profitRate, setProfitRate] = useState(5);

  const estimatedProfit = (accountSize * profitRate) / 100;

  const handleAccountSizeChange = (value) => {
    const newValue = Math.max(15000, Math.min(300000, accountSize + value));
    setAccountSize(newValue);
  };

  const handleProfitRateChange = (e) => {
    const value = parseFloat(e.target.value);
    setProfitRate(Math.max(0, Math.min(15, value)));
  };

  return (
    <section className="calculator">
      <Container>
        <div className="calculator__header">
          <h2 className="calculator__title">Estimate Your Profits!</h2>
        </div>

        <div className="calculator__content">
          <div className="calculator__control">
            <div className="calculator__control-header">
              <div className="calculator__icon">$</div>
              <div>
                <h3 className="calculator__control-title">Account Balance</h3>
                <p className="calculator__control-subtitle">$15,000 - $300,000</p>
              </div>
            </div>
            <div className="calculator__value-display">${accountSize.toLocaleString()}</div>
            <div className="calculator__slider-container">
              <input
                type="range"
                min="15000"
                max="300000"
                step="5000"
                value={accountSize}
                onChange={(e) => setAccountSize(parseInt(e.target.value))}
                className="calculator__slider"
              />
              <div className="calculator__slider-labels">
                <span>$15K</span>
                <span>$40K</span>
                <span>$100K</span>
                <span>$150K</span>
                <span>$200K</span>
              </div>
            </div>
          </div>

          <div className="calculator__control">
            <div className="calculator__control-header">
              <div className="calculator__icon calculator__icon--chart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="calculator__control-title">Maximum Drawdown</h3>
                <p className="calculator__control-subtitle">5% - 15%</p>
              </div>
            </div>
            <div className="calculator__value-display">{profitRate}%</div>
            <div className="calculator__slider-container">
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={profitRate}
                onChange={handleProfitRateChange}
                className="calculator__slider"
              />
              <div className="calculator__slider-labels">
                <span>5%</span>
                <span>8%</span>
                <span>10%</span>
                <span>12%</span>
                <span>15%</span>
              </div>
            </div>
          </div>

          <div className="calculator__control">
            <div className="calculator__control-header">
              <div className="calculator__icon calculator__icon--calendar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="calculator__control-title">Minimum Trading Days</h3>
                <p className="calculator__control-subtitle">2 - 5 days</p>
              </div>
            </div>
            <div className="calculator__value-display">3 days</div>
            <div className="calculator__slider-container">
              <input
                type="range"
                min="2"
                max="5"
                step="1"
                defaultValue="3"
                className="calculator__slider"
              />
              <div className="calculator__slider-labels">
                <span>2 days</span>
                <span>3 days</span>
                <span>4 days</span>
                <span>5 days</span>
              </div>
            </div>
          </div>

          <div className="calculator__result">
            <div className="calculator__result-content">
              <div className="calculator__result-summary">
                <span className="calculator__result-label">Price = </span>
                <span className="calculator__result-price">$449.23</span>
              </div>
              <p className="calculator__result-details">
                Account Balance: <span>${accountSize.toLocaleString()}</span> |
                Drawdown: <span>{profitRate}%</span> |
                Days: <span>3</span>
              </p>
            </div>
            <Button variant="primary" size="large">
              Start Challenge
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfitCalculator;
