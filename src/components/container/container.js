import React from 'react';
import './container.css';
import Header from '/Users/codenation20/Desktop/GitHub/bbc/src/components/header/header.js';
import NewsItem from '/Users/codenation20/Desktop/GitHub/bbc/src/components/newsItem/newsItem.js';


const Container = (props) => {

    const newsItem = props.news.map((newsInfo) => <NewsItem news={newsInfo} /> );

        return (
            <div className='container'>
                <Header header = {props.header}/>
                <div className='newsitemdiv'>
                {newsItem}
                </div>
            </div>
        );
    };

export default Container