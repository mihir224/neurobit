import React from 'react';
import '../styles/Upload.css';
import FileCopyIcon from '@mui/icons-material/FileCopy';

function Upload(){
    return(
        <div id='upload'>
            <div id='upload-container'>
                <div id='upload-div'>
                    <FileCopyIcon style={{fontSize:'40px'}}/>
                    <button id='browse-btn' type='button'>Browse Files</button>
                    <span>or drop files here</span>
                </div>  
            </div>
        </div>
    )
}
export default Upload;