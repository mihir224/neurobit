import React, {useState,useEffect} from 'react';
import '../styles/Mapping.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import json from '../schema.json';
import {useSelector,useDispatch} from 'react-redux';
import {updateOptions,updateOptionsTwo,updateAdditionalOptions} from '../redux/mappingSlice';
import {Navigate} from 'react-router-dom';

function Mapping(){
    const dispatch=useDispatch();
    const selectedOptions=useSelector(state=>state.mapping.selectedOptions);
    const selectedOptionsTwo=useSelector(state=>state.mapping.selectedOptionsTwo);
    const additionalOptions=useSelector(state=>state.mapping.additionalOptions);
    const currentPage=useSelector(state=>state.page.pn);
    const [dropDownStates, setDropDownStates]=useState(Array(json.channels.length).fill(false));
    const toggleDropdown=(index)=>{
        const prev=[...dropDownStates];
        prev[index]=!prev[index];
        setDropDownStates(prev);
    }
    const handleOptionChange=(index,value)=>{
        const prevOptions=[...selectedOptions];
        prevOptions[index]=value;
        dispatch(updateOptions(prevOptions));
    }
    const handleOptionTwoChange=(index,value)=>{
        const prevOptions=[...selectedOptionsTwo];
        prevOptions[index]=value;
        dispatch(updateOptionsTwo(prevOptions))
    }
    const handleAdditionalOptionChange=(index,value)=>{
        const prevOptions=[...additionalOptions];
        prevOptions[index]=value;
        dispatch(updateAdditionalOptions(prevOptions))
    }
    return currentPage===0?<Navigate to='/' replace={true}></Navigate>:(
        <div id='mapping'>
            <div className="grid-container">
                <div className="heading">Channel</div>
                <div className="heading">Primary Channel</div>
                <div className="heading">Reference Channel</div>
                <div className="heading"></div>
            </div>
                {json.channels.map((channel,index)=>{
            const channelName=channel.split('-');
            return(
                <div className='grid-container'>
                <div className="content">{channel}</div>
                <div className="content">
                    <select className='select' value={selectedOptions[index]} onChange={(e)=>{
                        handleOptionChange(index,e.target.value)
                    }}>
                    {json.options.map((option,index)=>{
                        return <option value={index}>{option}</option>
                    })}
                    </select>
                </div>
                <div className="content">
                    <select className='select' value={selectedOptionsTwo[index]} onChange={(e)=>{
                        handleOptionTwoChange(index,e.target.value)
                    }}>
                    {json.options2.map((option,index)=>{
                        return <option value={index}>{option}</option>
                    })}
                    </select>
                </div>
                <div className="content" >
                <button id='add-btn' type='button' onClick={()=>toggleDropdown(index)}>
                    {dropDownStates[index]?'Hide Backup Channels':<div style={{display:'flex',alignItems:'center'}}><AddIcon style={{fontSize:'20px'}}/>Add Backup Channels</div>}
                </button>
                </div>
                <div className={dropDownStates[index]?'content-dd':'content-dd dd'} ></div>
                    <div className={dropDownStates[index]?'content-dd':'content-dd dd'} >
                        <select className='select'>
                        {json.options.map((option,index)=>{
                        return <option value={index}>{option}</option>
                    })}
                        </select>
                    </div>
                    <div className={dropDownStates[index]?'content-dd':'content-dd dd'} >
                    <select className='select'>
                    {json.options2.map((option,index)=>{
                        return <option value={index}>{option}</option>
                    })}
                        </select>
                    </div>
                    <div className={dropDownStates[index]?'content-dd':'content-dd dd'} >
                        <button id='delete-btn' type='button'>
                            <DeleteIcon style={{fontSize:'20px'}} /> 
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            )
        })}

        <div className="grid-container">
                <div className="content">Additional Settings</div>
                    <div className="content">
                        <input type='checkbox' id='first' checked={additionalOptions[0]} onChange={(e)=>{
                            handleAdditionalOptionChange(0,e.target.checked)
                        }} />
                        <label htmlFor='first'>option 1</label>
                   </div>
                    <div className="content">
                        <input type='checkbox' id='second' checked={additionalOptions[1]} onChange={(e)=>{
                            handleAdditionalOptionChange(1,e.target.checked)
                        }}/>
                        <label htmlFor='second'>option 2</label>
                    </div>
                    <div className="content"></div>
            </div>
        </div>
    )
}
export default Mapping;

