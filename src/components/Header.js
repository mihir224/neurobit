import React from 'react';
import '../styles/Header.css';
import { useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import {Link} from 'react-router-dom';

function Header(){
    const currentPage=useSelector(state=>state.page.pn);
    const getCircleClassName=(index)=>{
        if(index===currentPage){
            return 'circle active'
        }
        else if(index<currentPage){
            return 'circle completed'
        }
        else return 'circle'
    }
    const getLineClassName=(index)=>{
        if(index<currentPage){
            return 'line line-completed'
        }
        else return 'line'
    }
    const textStyle=(page)=>{
        return currentPage>=page?{color:'#11c201',opacity:'1'}:{}
    }
    return(
        <div id='header'>
        <h2 id='heading'>Test_Study</h2>
        <div id='progress-block'>
        <Link to='/' className='link' style={textStyle(0)} >
        <div className='circle-container'>
            <div className={getCircleClassName(0)}>
                <span style={textStyle(0)} >{currentPage<=0?1:<CheckIcon style={{color:'white'}}/>}</span>
            </div>
            <span style={textStyle(0)} >Upload PDFs</span>
        </div>
        </Link>
            <div className={getLineClassName(0)}></div> 
        <Link to='/mapping' className='link' style={textStyle(1)} >
        <div className='circle-container'>
            <div className={getCircleClassName(1)}>
            <span style={textStyle(1)} >{currentPage<=1?2:<CheckIcon style={{color:'white'}}/>}</span>
            </div>
            <span style={textStyle(1)} >Map Channels</span>
        </div>
        </Link>
            <div className={getLineClassName(1)}></div> 
        <Link to='/preview' className='link' style={textStyle(2)} >
        <div className='circle-container'>
            <div className={getCircleClassName(2)}>
            <span style={textStyle(2)} >{currentPage<=2?3:<CheckIcon style={{color:'white'}}/>}</span>
            </div>
            <span style={textStyle(2)} >Save & Preview</span>
        </div>
        </Link>
        </div>
        </div>
    )
}
export default Header;