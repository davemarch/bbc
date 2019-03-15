import React from 'react';
import './container.css';
import Header from '/Users/codenation20/Desktop/GitHub/bbc/src/components/header/header.js';
import NewsItem from '/Users/codenation20/Desktop/GitHub/bbc/src/components/newsItem/newsItem.js';


const Container = (props) => {
        return (
            <div className='container'>
                <Header header = {props.header}/>
                <div className='newsitemdiv'>
                <NewsItem img={props.news[0].img} headline={props.news[0].headline} subcat={props.news[0].subcat}/>
                <NewsItem img={props.news[1].img} headline={props.news[1].headline} subcat={props.news[1].subcat}/>
                <NewsItem img={props.news[2].img} headline={props.news[2].headline} subcat={props.news[2].subcat}/>                
                </div>
            </div>
        );
    };

export default Container