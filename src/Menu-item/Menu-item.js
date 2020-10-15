import React from 'react';
import Directory from '../directory/directory'
import { withRouter } from 'react-router-dom';

import './Menu-item.scss'
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    
    <div className= {`${size} menu-item` } 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
     <div 
       className='background-image' 
       style ={{
        backgroundImage : `url(${imageUrl})`
       }}
     />
        <div className='content'>
            <div className="title">{title.toUpperCase()}</div>
            <div className="subtitle">SHOP NOW</div>
        </div>
    </div>

)

export default withRouter( MenuItem);