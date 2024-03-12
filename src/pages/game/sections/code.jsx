import React,{useState} from 'react'
import EditorCode from '../../../components/editor'

const Code = (props) => {
  return (
    <>
      <div className={"header"} style={{
          overflow:'hidden'
      }}>
          <div>
            <button style={{width:'fit-content',padding:'0 15px',backgroundColor:'#001528',fontWeight: 600,whiteSpace: 'nowrap' }}>Your Solutions</button>
          </div>
          <div>
            <button onClick={() => {props.setIsFullScreen(!props.isFullScreen)}}>
              {
                props.isFullScreen?
                <span className={"material-symbols-outlined"} style={{padding:'0 15px'}}>fullscreen_exit</span> :
                <span className={"material-symbols-outlined"} style={{padding:'0 15px'}}>fullscreen</span>
              }
            </button>
            <button><span className="material-symbols-outlined" onClick={() => {
              props.setCode('')
            }}>refresh</span></button>
            <button className={'submit'} style={{width:'fit-content',padding:'0 15px',backgroundColor:'#0046c7',whiteSpace: 'nowrap' }} onClick={() => {
              props.run()
            }}>Run Code</button>
          </div>
      </div>
      <EditorCode fontSize={props.fontSize} theme={props.theme} keymap={props.keymap} code={props.code} setCode={props.setCode} whiteboardMode={props.whiteboardMode} setWhiteboardMode={props.setWhiteboardMode} run={props.run} submit={props.submit} />
    </>
  )
}

export default Code