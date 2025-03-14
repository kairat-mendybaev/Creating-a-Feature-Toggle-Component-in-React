import React from 'react';

function FeatureToggle({ isEnabled, featureName }) {
    return (
        <div>
            {isEnabled ? (
                <h2>{featureName} is enabled</h2>
            ) : (
                <h2>Feature {featureName} is disabled</h2>
            )}
        </div>
    );
}

export default FeatureToggle;

