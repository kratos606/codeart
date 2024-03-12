import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/keymap/sublime';
import 'codemirror/keymap/emacs';
import 'codemirror/keymap/vim';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/lib/codemirror.css';

function Editor(props) {
    React.useEffect(() => {
        document.querySelectorAll('.CodeMirror, .CodeMirror-gutters').forEach(el => {
            el.style.fontSize = `${props.fontSize}px`
        })
    }, [props.fontSize])
    return (
        <>
            <CodeMirror
                height={'calc(100% - 40px)'}
                value={props.code}
                lazyLoadMode={false}
                options={{
                    keyMap: props.keymap,
                    mode: props.whiteboardMode ? 'default' : 'python',
                    theme: props.whiteboardMode ? 'default' : props.theme,
                    tabSize: 2,
                    lineNumbers: true,
                    lineWrEditoring: true,
                    foldGutter: !props.whiteboardMode,
                    autoRefresh: true,
                    autoCloseBrackets: !props.whiteboardMode,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    extraKeys: {
                        "Ctrl-Q": function (cm) {
                            cm.foldCode(cm.getCursor());
                        },
                        "Ctrl-'": function () {
                            props.run()
                        },
                        "Ctrl-0": function () {
                            props.submit()
                        }
                    }
                }}
                onChange={(editor, data, value) => {
                    props.store && localStorage.setItem('code', editor.getValue());
                    props.setCode(editor.getValue());
                }}
            />
        </>
    )
}

export default Editor