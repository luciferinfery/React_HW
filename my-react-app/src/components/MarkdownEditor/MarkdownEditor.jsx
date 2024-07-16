import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editorInstance.addHook('change', () => {
            const content = editorInstance.getMarkdown();
            onContentChange(content);
        });

        return () => {
            editorInstance.destroy();
        };
    }, [onContentChange]);

    return <div ref={editorRef}></div>;
};

export default MarkdownEditor;