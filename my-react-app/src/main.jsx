import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor.jsx';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

root.render(<MarkdownEditor onContentChange={console.log} />);