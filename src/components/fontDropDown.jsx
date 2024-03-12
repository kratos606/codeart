import React from 'react'
import { Box, Select, MenuItem, OutlinedInput } from '@mui/material';


function FontDropDown(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-block',width: '100%' }}>
            <Select
                className='Button Select'
                id="font-select"
                value={props.fontSize}
                variant="outlined"
                onChange={(e) => {
                    props.setFontSize(e.target.value);
                    localStorage.setItem('fontSize', e.target.value);
                }}
                sx={{ width: '100%',height:'60px' }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: '#15314b',
                            '& .MuiMenuItem-root': {
                                color: '#fff',
                                fontWeight: 'bold',
                                '&.Mui-selected': {
                                    backgroundColor: 'white',
                                    color: '#15314b',
                                    '&.Mui-focusVisible': {
                                        backgroundColor: 'white',
                                        color: '#15314b',
                                    },
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: 'white',
                                    color: '#15314b',
                                },
                                '&:hover': {
                                    backgroundColor: '#626ee3',
                                    color: 'white',
                                }
                            }

                        },
                    },

                }}
                input={<OutlinedInput margin='dense' />}
                
            >
                <MenuItem value={12}>0.8x</MenuItem>
                <MenuItem value={13}>0.9x</MenuItem>
                <MenuItem value={14}>1.0x</MenuItem>
                <MenuItem value={15}>1.1x</MenuItem>
                <MenuItem value={16}>1.2x</MenuItem>
                <MenuItem value={17}>1.3x</MenuItem>
                <MenuItem value={18}>1.4x</MenuItem>
            </Select>
        </Box>
    )
}

export default FontDropDown