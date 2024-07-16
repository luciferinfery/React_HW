import MarkdownEditor from "./Components/MarkdownEditor/MarkdownEditor.jsx";

function App() {

    return (
        <>
            <MarkdownEditor onChange={console.log}/>
        </>
    )
}

export default App