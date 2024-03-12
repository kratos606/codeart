import React,{ useState } from 'react'
import Navbar from '../../components/navbar'
import Drawer from '../../components/settings';
import Split from 'react-split'
import Info from './sections/info';
import Code from './sections/code';
import Test from './sections/test';

const Game = () => {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'monokai');
  const [keymap, setKeymap] = useState(localStorage.getItem('keymap') || 'sublime');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 16);
  const [code, setCode] = useState(localStorage.getItem('code') || '');
  const [whiteboardMode, setWhiteboardMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const run = () => {
    console.log(code);
  }
  const submit = () => {
    console.log(code);
  }
  return (
    <>
      <div className={'ui'}>
        <Navbar setOpen={setOpen} />
        <Drawer open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} keymap={keymap} setKeymap={setKeymap} fontSize={fontSize} setFontSize={setFontSize} whiteboardMode={whiteboardMode} setWhiteboardMode={setWhiteboardMode} />
        <main>
          <Split
            className="split main"
            minSize={0}
            sizes={[50,50]}
          >
            <div className={'section'} style={{height:'100%',overflow:'hidden'}}>
              <Info />
            </div>
            <Split className={'split column'} direction='vertical' minSize={0} sizes={[60,40]}>
              <div className={isFullScreen ? 'section fullscreen' : 'section'}>
                <Code isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} theme={theme} keymap={keymap} fontSize={fontSize} whiteboardMode={whiteboardMode} code={code} setCode={setCode} run={run} submit={submit} />
              </div>
              <div className={'section'} style={{overflow:'hidden'}}>
                <Test />
              </div>
            </Split>
          </Split>
        </main>
      </div>
    </>
  )
}

export default Game