import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// here we have some standard React junk
// here we find the render App in it's natural habitat
// 

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.render(
  <React.StrictMore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMore>,
  document.getElementById('root')
)
