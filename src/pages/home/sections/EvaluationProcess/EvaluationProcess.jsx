import { Container, Card, Button } from '../../../../components';
import CheckIcon from '@mui/icons-material/Check';
import './EvaluationProcess.scss';

const EvaluationProcess = () => {
  return (
    <section className="evaluation">
      <Container>
        <div className="evaluation__header">
          <h2 className="evaluation__title">
            SHOW US YOUR<br />
            TALENT AND BE REWARDED
          </h2>
        </div>

        <div className="evaluation__cards">
          <Card className="evaluation__card">
            <div className="evaluation__card-header">
              <h3>EVALUATION PROCESS</h3>
              <span className="evaluation__badge">DEMO</span>
            </div>

            <div className="evaluation__step">
              <span className="evaluation__step-label">STEP 01</span>
              <h4>NOVICE</h4>
              <p>
                The ARC Challenge educates traders and leads them to master their trading habits. Traders demonstrate their experience by following our Trading Objectives inspired by key risk management rules when completing an ARC Challenge, traders move on to the Verification step.
              </p>
            </div>

            <div className="evaluation__step">
              <span className="evaluation__step-label">STEP 02</span>
              <h4>EXPERT PHASE</h4>
              <p>
                The Verification step verifies the skills traders demonstrated in the ARC Challenge. The Trading Objectives are simplified, with the Profit Target being halved while the Maximum Loss Rules remain intact. Upon passing it, traders get access to an ARC Account.
              </p>
            </div>

            <div className="evaluation__step">
              <span className="evaluation__step-label">EVALUATION PROCESS</span>
              <div className="evaluation__feature">
                <CheckIcon />
                <span>Trading Tools & Services</span>
              </div>
            </div>

            <Button variant="secondary" className="evaluation__btn">
              LEARN MORE
            </Button>
          </Card>

          <Card className="evaluation__card evaluation__card--highlight">
            <div className="evaluation__card-header">
              <h3>ARC ACCOUNT</h3>
              <span className="evaluation__badge evaluation__badge--blue">MONETIZED DEMO</span>
            </div>

            <div className="evaluation__step">
              <span className="evaluation__step-label">STEP 03</span>
              <h4>ARC TRADER</h4>
              <p>
                Advancing to another step demonstrates commitment and talent, leading to an ARC Account with fictitious funds in prestigious environment. Despite being a demo, ARC Traders can be rewarded for their performance with profits without risking their capital and access exclusive opportunities, including ARC Premium Programme.
              </p>
            </div>

            <div className="evaluation__step">
              <span className="evaluation__step-label">ARC ACCOUNT</span>
              <div className="evaluation__features-list">
                <div className="evaluation__feature">
                  <CheckIcon />
                  <span>ARC Account with fictitious funds up to $200,000</span>
                </div>
                <div className="evaluation__feature">
                  <CheckIcon />
                  <span>Reward up to 90% of simulated profits</span>
                </div>
                <div className="evaluation__feature">
                  <CheckIcon />
                  <span>Performance Coaching Sessions</span>
                </div>
                <div className="evaluation__feature">
                  <CheckIcon />
                  <span>ARC Premium Programme</span>
                </div>
                <div className="evaluation__feature">
                  <CheckIcon />
                  <span>All - Trading Tools & Services</span>
                </div>
              </div>
            </div>

            <Button variant="primary" className="evaluation__btn">
              LEARN MORE
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default EvaluationProcess;
