import React,{useEffect, useRef, useState} from 'react'
import CanvasDraw from 'react-canvas-draw'
import Test from '../../test';

const Info = () => {
  const [activeTab, setActiveTab] = useState('prompt');
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(5);
  const [color, setColor] = useState('white');
  const sketchRef = useRef(null);
  const data = localStorage.getItem('sketch') || "{'lines':[]}";

  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'z') {
        // Undo last action
        sketchRef.current.undo();
      }
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  
  }, []);

  useEffect(() => {
    if (activeTab ==='sketch') {
      document.querySelector('.dot').style.width = `${radius * 2.5}px`;
      document.querySelector('.dot').style.height = `${radius * 2.5}px`;
    }
  },[radius])

  return (
    <>
      <div className={"header"} style={{justifyContent:'flex-start'}}>
        <div>
          <button 
            style={{width:'fit-content', padding:'0 15px', backgroundColor: activeTab === 'prompt' ? '#001528' : '#15314b', fontWeight: 600}}
            onClick={() => setActiveTab('prompt')}
          >
            Prompt
          </button>
        </div>
        <div>
          <button
            style={{width:'fit-content', padding:'0 15px', backgroundColor: activeTab === 'sketch' ? '#001528' : '#15314b', fontWeight: 600}} 
            onClick={() => setActiveTab('sketch')}
          >
            SketchBoard
          </button>
        </div>
      </div>

      {activeTab === 'prompt' && <Test />}
      {activeTab === 'sketch' && <div style={{height:'100%'}}>
        <CanvasDraw 
          ref={sketchRef} 
          immediateLoading 
          hideInterface 
          hideGrid 
          brushRadius={radius} 
          brushColor={color} 
          saveData={data} 
          backgroundColor='#001f3e' 
          style={{height:'100%',width:'100%', border:'1px solid #004080'}} 
          width={sketchRef.current?.canvas?.width}  
          height={sketchRef.current?.canvas?.height}
          onChange={(data) => {
            const sketchData = sketchRef.current.getSaveData(); 
            localStorage.setItem('sketch', sketchData);
            const newWidth = sketchRef.current.canvas.width;
            const newHeight = sketchRef.current.canvas.height;
            sketchRef.current.canvas.width = newWidth;
            sketchRef.current.canvas.height = newHeight;
          }} />
        <div className={"drawSettings"} style={{borderRadius:'0 0 0 0',backgroundColor:'#001528',position:'fixed',width:'60px',top:'50%',transform:'translateY(calc(-50% + 40px))'}}>
          <div className='color-picker' style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={() => {
            setOpen(!open)
            }}>
            <span className="dot" style={{
              backgroundColor: color,
              borderRadius: '50%',
              height: radius * 2,
              width: radius * 2
            }}></span>
            {open && <div className="colors">
              <div className="size-picker">
                Épaisseur
                <input type="range" min="1" max="10" value={radius} onChange={(e) => setRadius(e.target.value)} />
              </div>
              <div className="colors-panel">
              <div className="color" style={{backgroundColor:'#ffffff'}} onClick={() => setColor('#ffffff')}></div>
              <div className="color" style={{backgroundColor:'#fef445'}} onClick={() => setColor('#fef445')}></div>
              <div className="color" style={{backgroundColor:'#fac710'}} onClick={() => setColor('#fac710')}></div>
              <div className="color" style={{backgroundColor:'#f24726'}} onClick={() => setColor('#f24726')}></div>
              <div className="color" style={{backgroundColor:'#e6e6e6'}} onClick={() => setColor('#e6e6e6')}></div>
              <div className="color" style={{backgroundColor:'#cee741'}} onClick={() => setColor('#cee741')}></div>
              <div className="color" style={{backgroundColor:'#8fd14f'}} onClick={() => setColor('#8fd14f')}></div>
              <div className="color" style={{backgroundColor:'#da0063'}} onClick={() => setColor('#da0063')}></div>
              <div className="color" style={{backgroundColor:'#808080'}} onClick={() => setColor('#808080')}></div>
              <div className="color" style={{backgroundColor:'#12cdd4'}} onClick={() => setColor('#12cdd4')}></div>
              <div className="color" style={{backgroundColor:'#0ca789'}} onClick={() => setColor('#0ca789')}></div>
              <div className="color" style={{backgroundColor:'#652cb3'}} onClick={() => setColor('#652cb3')}></div>
              <div className="color" style={{backgroundColor:'#000000'}} onClick={() => setColor('#000000')}></div>
              <div className="color" style={{backgroundColor:'#2d9bf0'}} onClick={() => setColor('#2d9bf0')}></div>
              <div className="color" style={{backgroundColor:'#414bb2'}} onClick={() => setColor('#414bb2')}></div>
              <div className="color" style={{backgroundColor:'#9510ac'}} onClick={() => setColor('#9510ac')}></div>
              </div>
            </div>}
          </div>
          <button className='erase' onClick={() => {
            sketchRef.current.clear()
            localStorage.removeItem('sketch');
          }}>
            <div className="icon"></div>
          </button>
        </div>
      </div>
      }
    </>
  )
}

export default Info