import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-primary-green">ARC</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Your premier prop trading platform backed by globally recognized ARC Markets. 
            Empowering traders with sustainable challenges and top-tier technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border border-border text-white rounded-lg font-semibold hover:bg-dark-card transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;