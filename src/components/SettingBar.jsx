import React from 'react';
import '../styles/setting-bar.scss'
import ToolState from '../store/ToolState';

const SettingBar = () => {

    const ChangeBorderColor = (e) => {
        ToolState.setBorderColor(e.target.value)
    }

    return (
        <div className='setting-bar'>
            <label htmlFor='widthNumber'>Line width</label>
            <input 
                onChange={e => ToolState.setLineWidth(e.target.value)}
                id="widthNumber" 
                className='setting-bar__width-number' 
                type="number"  
                defaultValue={1} 
                min={1} 
                max={50}
            />
            <label htmlFor='borderColor'>Border color</label>
            <input 
                onChange={e => ChangeBorderColor(e)}
                id="borderColor" 
                className='setting-bar__width-number' 
                type="color"  
            />
        </div>
    );
};

export default SettingBar;