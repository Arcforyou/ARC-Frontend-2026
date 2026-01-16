import { useState } from 'react';
import { Container, Card, Button } from '../../../../components';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Pricing.scss';

const Pricing = () => {
  const [accountType, setAccountType] = useState('standard');
  const [challengeType, setChallengeType] = useState('two-phase');
  const [accountSize, setAccountSize] = useState('15k');

  const accountSizes = ['15k', '25k', '50k', '100k', '200k'];

  const pricingData = {
    'two-phase': {
      novice: {
        title: 'Novice',
        badge: 'Funded Stage',
        profitTarget: '$1,200 (8%)',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '5 Days',
      },
      expert: {
        title: 'Expert',
        badge: 'Funded Stage',
        profitTarget: '$750 (5%)',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '5 Days',
      },
      funded: {
        title: 'ARC Funded Traders',
        badge: 'Funded Stage',
        profitTarget: 'unlimited',
        maxDailyLoss: '$750 (5%)',
        maxOverallLoss: '$1,500 (10%)',
        minTradingDays: '5 Days',
      },
    },
    'instant': {
      title: 'ARC Funded Traders',
      badge: 'Funded Stage',
      profitTarget: 'Unlimited',
      maxDailyLoss: '3 %',
      maxOverallLoss: '6 %',
      minTradingDays: '',
    },
  };

  return (
    <section className="pricing">
      <Container>
        <div className="pricing__controls">
          <div className="pricing__toggle">
            <button
              className={`pricing__toggle-btn ${accountType === 'standard' ? 'active' : ''}`}
              onClick={() => setAccountType('standard')}
            >
              Standard Account
            </button>
            <button
              className={`pricing__toggle-btn ${accountType === 'customized' ? 'active' : ''}`}
              onClick={() => setAccountType('customized')}
            >
              Customized Account
            </button>
          </div>

          <div className="pricing__challenge-toggle">
            <button
              className={`pricing__challenge-btn ${challengeType === 'two-phase' ? 'active' : ''}`}
              onClick={() => setChallengeType('two-phase')}
            >
              Two-Phase Challenge
            </button>
            <button
              className={`pricing__challenge-btn ${challengeType === 'instant' ? 'active' : ''}`}
              onClick={() => setChallengeType('instant')}
            >
              Instant Funding
            </button>
          </div>

          <div className="pricing__sizes">
            {accountSizes.map((size) => (
              <button
                key={size}
                className={`pricing__size-btn ${accountSize === size ? 'active' : ''}`}
                onClick={() => setAccountSize(size)}
              >
                ${size}
              </button>
            ))}
          </div>
        </div>

        {challengeType === 'two-phase' ? (
          <div className="pricing__cards">
            <Card className="pricing__card">
              <div className="pricing__card-badge">{pricingData['two-phase'].novice.badge}</div>
              <h3 className="pricing__card-title">{pricingData['two-phase'].novice.title}</h3>

              <div className="pricing__details">
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Profit Target <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].novice.profitTarget}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Daily Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].novice.maxDailyLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Overall Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].novice.maxOverallLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Minimum Trading Days <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].novice.minTradingDays}</span>
                </div>
              </div>
            </Card>

            <Card className="pricing__card">
              <div className="pricing__card-badge">{pricingData['two-phase'].expert.badge}</div>
              <h3 className="pricing__card-title">{pricingData['two-phase'].expert.title}</h3>

              <div className="pricing__details">
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Profit Target <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].expert.profitTarget}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Daily Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].expert.maxDailyLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Overall Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].expert.maxOverallLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Minimum Trading Days <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].expert.minTradingDays}</span>
                </div>
              </div>
            </Card>

            <Card className="pricing__card pricing__card--primary">
              <div className="pricing__card-badge">{pricingData['two-phase'].funded.badge}</div>
              <h3 className="pricing__card-title">{pricingData['two-phase'].funded.title}</h3>

              <div className="pricing__details">
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Profit Target <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].funded.profitTarget}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Daily Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].funded.maxDailyLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Overall Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].funded.maxOverallLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Minimum Trading Days <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['two-phase'].funded.minTradingDays}</span>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div className="pricing__single">
            <Card className="pricing__card pricing__card--primary pricing__card--large">
              <div className="pricing__card-badge">{pricingData['instant'].badge}</div>
              <h3 className="pricing__card-title">{pricingData['instant'].title}</h3>

              <div className="pricing__details">
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Profit Target <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['instant'].profitTarget}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Daily Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['instant'].maxDailyLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Maximum Overall Loss <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">{pricingData['instant'].maxOverallLoss}</span>
                </div>
                <div className="pricing__detail">
                  <span className="pricing__detail-label">
                    Minimum Trading Days <HelpOutlineIcon />
                  </span>
                  <span className="pricing__detail-value">-</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="pricing__footer">
          <p className="pricing__price">$79 For $15k account</p>
          <Button variant="primary" size="large">
            Start Challenge
          </Button>
          <p className="pricing__terms">Please check Terms of Use for detailed info</p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
