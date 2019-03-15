import React from 'react';
import './newsItem.css';
import img from './imgPlaceholder.jpg'


const NewsItem = (props) => {
        return (
            <div className='newsItem'>
            <img className= 'img' src={props.img}/>
            <div className= 'NewsItemText'>
            <div className='headline'>{props.headline}</div>
            <div className='category'>{props.subcat}</div>
            </div>
            </div>
        );
    };

export default NewsItem