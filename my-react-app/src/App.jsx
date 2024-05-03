import Definitions from './components/Definitions.jsx';

function App() {
    const definitions = [
        {dt: 'Wine', dd: 'Sophisticated alcoholic drink', id: 1},
        {dt: 'Juice', dd: 'Refreshing fruity drink', id: 2},
    ];

    return (
        <>
            <Definitions data={definitions}/>
        </>
    )
}

export default App