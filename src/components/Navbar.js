import React from 'react';
import '../styles/Navbar.css';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';

function Navbar(){
    return(
        <div id='nav-bar'>
        <div>
            <h2 id='logo'>React Test</h2>
        <hr/>
        <ul id='nav-list'>
            <button type='button' ><li className='nav-item'><GridViewOutlinedIcon/> Dashboard</li></button>
            <button type='button'><li className='nav-item'><NoteAddOutlinedIcon/> Montages</li></button>
            <button type='button'><li className='nav-item'><TollOutlinedIcon/> Calls</li></button>
        </ul>
        </div>
        <div id='credits'>
            <h3>1,650</h3>
            <span>Total Credits Available</span>
        </div>
        </div>
    )
}
export default Navbar;