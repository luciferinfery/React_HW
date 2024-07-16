import React from 'react';
import ReactDOM from 'react-dom/client';
import PostCatalog from './components/PostCatalog/PostCatalog.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

root.render(<PostCatalog />);