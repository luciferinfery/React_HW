import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumList from '../src/components/AlbumList.jsx';
import AlbumPhotos from '../src/components/AlbumPhotos.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AlbumList />} />
                    <Route path="/album/:id" element={<AlbumPhotos />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;