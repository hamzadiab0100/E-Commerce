import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider, useProduct } from './components/ProductContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ProductProvider>
         <App />
     </ProductProvider>
 
  </StrictMode>,
)
