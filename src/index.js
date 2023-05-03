import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// here we have some standard React junk
// here we find the render App in it's natural habitat
// 

const root = createRoot(document.getElementById('root'));
root.render(<App />);
