import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifGrid } from './components/GifGrid';
import GifExpert from './GifExpert';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifGrid/>
  </React.StrictMode>
)
// <GifExpert/>
