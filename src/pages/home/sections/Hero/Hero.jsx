import { Container, Button } from '../../../../components';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TimerIcon from '@mui/icons-material/Timer';
import BarChartIcon from '@mui/icons-material/BarChart';
import './Hero.scss';

const Hero = () => {
  const features = [
    {
      icon: <LayersIcon />,
      text: '90% + Profit split',
    },
    {
      icon: <AccountBalanceWalletIcon />,
      text: '300K+ trading accounts',
    },
    {
      icon: <TimerIcon />,
      text: 'No time limit in challenge phase',
    },
    {
      icon: <BarChartIcon />,
      text: 'Fully Customizable accounts',
    },
  ];

  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <h1 className="hero__title">
            Built for Traders,<br />
            Backed by Professionals!
          </h1>
          <p className="hero__description">
            Master your trading skills on our simulated trading platform, improve your trading on a demo ARC Account with up to $300,000 and get a reward of up to 90% of your simulated profits
          </p>
          <Button variant="primary" size="large" className="hero__cta">
            ARC CHALLENGE
          </Button>

          <div className="hero__features">
            {features.map((feature, index) => (
              <div key={index} className="hero__feature">
                <div className="hero__feature-icon">{feature.icon}</div>
                <span className="hero__feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
