import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

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

    return <div ref={editorRef} />;
};

export default MarkdownEditor;