import React from 'react'
import { Typography, Drawer } from '@mui/material'
import FontDropDown from '../components/fontDropDown'
import KeymapDropDown from '../components/keymapDropDown'
import ThemeDropDown from '../components/themeDropDown'
import WhiteBoardModeDropDown from '../components/whiteBoardModeDropDown';

const Settings = (props) => {
  return (
    <Drawer
      anchor={'right'}
      open={props.open}
      onClose={() => props.setOpen(false)}
      variant="plain"
      BackdropProps={{ invisible: true }}
      PaperProps={{
          style: {
              width: '420px',
              backgroundColor: '#02203c',
              color: 'white',
              padding: '1rem'
          }
      }}
  >
      <Typography className='DrawerTitle settingsTitle' variant='h3' sx={{ color: 'white' }}>
          Workspace Settings
      </Typography>
      <div className="settings-grid">
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>
              Font Size
              </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <FontDropDown fontSize={props.fontSize} setFontSize={props.setFontSize} /> 
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>
              Editor Key Maps
              </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <KeymapDropDown keymap={props.keymap} setKeymap={props.setKeymap} />
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
              Editor Theme
              </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <ThemeDropDown theme={props.theme} setTheme={props.setTheme} />
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
              Whiteboard Mode
              </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
              <WhiteBoardModeDropDown whiteboardMode={props.whiteboardMode} setWhiteboardMode={props.setWhiteboardMode} />
          </div>
      </div>
      <Typography className='DrawerTitle settingsTitle' variant='h3' sx={{ color: 'white' }}>
          Editor Key Bindings
      </Typography>
        <div className="settings-grid" style={{gap:0,gridAutoRows:'minmax(30px, min-content)',margin:'20px 0'}}>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Ctrl + '
            </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center',justifyContent:'right'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Run Code
            </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Ctrl + 0
            </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center',justifyContent:'right'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Submit Code
            </Typography>
          </div>
        </div>
        <Typography className='DrawerTitle settingsTitle' variant='h3' sx={{ color: 'white' }}>
          SketchBoard Key Bindings
      </Typography>
        <div className="settings-grid" style={{gap:0,gridAutoRows:'minmax(30px, min-content)',margin:'20px 0'}}>
          <div style={{
              display:'flex',alignItems:'center'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Ctrl + Z
            </Typography>
          </div>
          <div style={{
              display:'flex',alignItems:'center',justifyContent:'right'
          }}>
            <Typography className='DrawerMenuName' variant='h6' sx={{ color: 'white', fontWeight: 300 }}>  
                Undo Change
            </Typography>
          </div>
        </div>
    </Drawer>
  )
}

export default Settings