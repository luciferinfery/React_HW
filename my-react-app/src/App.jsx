import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const App = () => {
    return (
        <div>
            <h1>Мій додаток React</h1>
            <h2>Передача только title:</h2>
            <Card title="hi" />
            <h2>Передача только text:</h2>
            <Card text="how are you?" />
            <h2>Передача и title, и text:</h2>
            <Card title="hi" text="how are you?" />
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));