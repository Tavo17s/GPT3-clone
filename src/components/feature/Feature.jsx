import React from 'react';
import './feature.css';

const Features = ({ title, text }) => (
    <div className="gpt3__features-container__feature" id="features">
        <div className="gpt3__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container__feature-text">
            <p>{text}</p>
            {/* {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))} */}
        </div>
    </div>
);

export default Features;