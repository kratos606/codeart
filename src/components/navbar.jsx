import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Box, Button, Typography } from '@mui/material';
import Tooltip from './tooltip/tooltip';
import Timer from './timer';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: name[0].toUpperCase(),
    };
  }

const Navbar = (props) => {
    const [profile,setProfile] = React.useState(false);
    return (
        <nav style={{ position: 'relative', top: 0, left: 0, width: '100vw', paddingInline: '1rem', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ color: 'white', textTransform: 'none', fontFamily: '"Open Sans", Helvetica, Arial, sans-serif', fontSize: '18px', backgroundColor: '#626ee3', width: '160px', height: '40px', borderRadius: '0 0 5px 5px', padding: '1.2rem .5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} variant="filled" onClick={() => localStorage.removeItem('code')} >
                        <span style={{fontFamily:'"Open Sans", Helvetica, Arial, sans-serif'}}>CodingArt</span>
                    </button>
                <div className='navbar-link'>
                    <Tooltip title="Questions List" style={{ color: '#001528', width: 'max-content', padding: '1rem' }}>
                        <Button variant="outlined" id='button' className='Button'>
                            <FormatListBulletedIcon sx={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                </div>
                <div className='navbar-link'>
                    <Tooltip title="Next Question" style={{ color: '#001528', width: 'max-content', padding: '1rem' }}>
                        <Button variant="outlined" id='button' className='Button'>
                            <ArrowForwardIcon sx={{ fontSize: '2rem' }} />
                        </Button>
                    </Tooltip>
                </div>
                <Timer />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Settings" style={{ color: '#001528', width: 'max-content', padding: '1rem' }}>
                    <Button variant="outlined" id='button' className='Button' onClick={() => props.setOpen(true)}>
                        <SettingsOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </Button>
                </Tooltip>
                <Box>
                    <button style={{ all: 'unset', cursor: 'pointer' }} onClick={() => setProfile(!profile)}><Avatar {...stringAvatar('yassir')} /></button>
                    {profile && <Box sx={{ width: '200px', position: 'absolute', backgroundColor: '#15314b', transform: 'translate(-160px,20px)', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ width: '100%', textAlign: 'center', padding: '1rem' }}><Typography variant='h6'>{100}</Typography></Box>
                        <Box sx={{ width: '100%', textAlign: 'center' }}><Button color='success' fullWidth onClick={() => certificate()}>Get <br />Certificate</Button></Box>
                        <Button variant="text" color="success" fullWidth>Profile</Button>
                        <Button variant="text" color="success" fullWidth>Logout</Button>
                    </Box>}
                </Box>
            </div>
        </nav>
  )
}

export default Navbar