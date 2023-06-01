import React from 'react';
import '../styles/Preview.css';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import json from '../schema.json';
import {Link} from 'react-router-dom';
import {updatePageBack} from '../redux/pageSlice';


function Preview(){
    const currentPage=useSelector(state=>state.page.pn);
    const {selectedOptions,selectedOptionsTwo,additionalOptions}=useSelector(state=>state.mapping);
    return currentPage===0?<Navigate to='/' replace={true}></Navigate>:(
        <div id='preview'>
          <div className="grid-container">
                <div className="heading">Channel</div>
                <div className="heading">Primary Channel</div>
                <div className="heading">Reference Channel</div>
                <div className="heading"></div>
            </div>
            {json.channels.map((channel,index)=>{
                return(
                <div className="grid-container preview-container">
                <div className="preview-item" >{channel}</div>
                <div className="preview-item">{json.options[selectedOptions[index]]}</div>
                <div className="preview-item">{json.options2[selectedOptionsTwo[index]]}</div>
                <div className="preview-item"><Link to='/mapping'><button type='button' id='edit-btn' onClick={()=>{
                    updatePageBack();
                }}>Edit Channel</button></Link></div>
                <div className="preview-item"><span style={{opacity:0.6}}>Backup Channels</span></div>
                <div className="preview-item">
                    <div>Private</div>
                    <div>Channel</div>
                </div>
                <div className="preview-item">
                    <div>NULL</div>
                    <div>NULL</div>
                </div>
            </div>
                )
            })}
        </div>
    )
}
export default Preview;