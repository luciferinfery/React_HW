import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor.jsx';

ReactDOM.render(
    <MarkdownEditor onContentChange={console.log} />,
    document.getElementById('container')
);
