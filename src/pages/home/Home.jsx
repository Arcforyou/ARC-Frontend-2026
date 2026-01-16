import Layout from '../../components/Layout/Layout';
import Hero from './sections/Hero/Hero';
import EvaluationProcess from './sections/EvaluationProcess/EvaluationProcess';
import Pricing from './sections/Pricing/Pricing';
import ProfitCalculator from './sections/ProfitCalculator/ProfitCalculator';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <EvaluationProcess />
      <Pricing />
      <ProfitCalculator />
    </Layout>
  );
};

export default Home;
