import React from 'react';
import ReactDOM from 'react-dom';
import { InstantPrint } from './src/index';

// Demo component to showcase InstantPrint with different filters
const Demo = () => {
  // Sample filters to demonstrate
  const filters = ['_1977', 'aden', 'brooklyn', 'xpro2', 'nashville'];
  
  return (
    <div>
      <h1>React Instant Print Demo</h1>
      <p>A collection of Instagram-like filters for your images</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filters.map(filter => (
          <div key={filter} style={{ margin: '10px' }}>
            <InstantPrint
              altText={`Image with ${filter} filter`}
              captionText={`Filter: ${filter}`}
              fadeDuration="5s"
              filter={filter}
              src="https://picsum.photos/300/300"
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Slow Fade Example</h2>
        <InstantPrint
          altText="Image with slow fade"
          captionText="Slow fade effect (30s)"
          fadeDuration="30s"
          filter="walden"
          src="https://picsum.photos/400/300"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

// Render the demo app
ReactDOM.render(<Demo />, document.getElementById('root'));

