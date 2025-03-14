import React from 'react';
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeatureToggle isEnabled={true} featureName="New Dashboard" />
        <FeatureToggle isEnabled={false} featureName="Dark Mode" />
        <FeatureToggle isEnabled={true} featureName="Advanced Settings" />
      </header>
    </div>
  );
}

export default App;

