import React from 'react';
import Carousel from './components/Carousel.jsx';
const images = [
    './src/assets/img/Eric.jpg',
    './src/assets/img/Rhez.jpg',
    './src/assets/img/Riten-Dharia.jpg',
    './src/assets/img/Tayfun-Coskun.jpg',
    './src/assets/img/Tihomir-Trichkov.jpg'
];

const App = () => {
    return (
        <div className="container container-1200">
            <h1>Carousel Example</h1>
            <Carousel images={images} />
        </div>
    );
};

export default App;

