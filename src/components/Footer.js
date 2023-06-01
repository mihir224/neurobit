import React from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {resetPage,updatePageNext,updatePageBack} from '../redux/pageSlice';


function Footer(){
    const dispatch=useDispatch();
    const currentPage=useSelector(state=>state.page.pn);

    return (
        <div id='footer'>
        <div id='footer-container' style={{justifyContent:currentPage===0&&'flex-end'}}>
        {currentPage>0&&<div>
            <Link to={currentPage===1?'/':'/mapping'}><button className='footer-btn' id='back-btn' type='button' onClick={()=>{
                dispatch(updatePageBack());
            }}>Back</button></Link>
            <Link to='/'><button className='footer-btn'  id='cancel-btn' type='button' onClick={()=>{
                dispatch(resetPage());
            }}>Cancel Montage</button></Link>
        </div>
        }
        {currentPage<2?<Link to={currentPage===0?'/mapping':'/preview'} ><button className='footer-btn' id='next-btn' type='button' onClick={()=>{
                dispatch(updatePageNext());
            }}>Next</button></Link>:<button className='footer-btn' id='save-btn' type='button' onClick={()=>{
                dispatch(updatePageNext());
                alert('Channels Saved!')
            }}>Save</button>}
        </div>
        </div>
    )
}

export default Footer;