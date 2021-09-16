import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './News.css'
import { data } from './NewsData'

export default function News() {
    const [layout, setLayout] = useState('large')
    const [loading, setLoading] = useState(true)
    // 
    const API_KEY = '34f8ef3527e540efb4e8208012d7da35'
    useEffect(() => {
       setLoading(false)
    }, [])


    const fetchData = () => {
        // uncomment below code in case of development

        // axios.get(`https://newsapi.org/v2/everything?q=Covid19&from=2021-08-15&apiKey=${API_KEY}`).then(res => res.data)
        // .then(data1 => {
        //     console.log(data1);
        //     setMainData(data1.articles);
        //     setLoading(false)
        // })
    }
    
    return (
        <>
            { loading ? <i className='fas fa-virus'></i>
            : (<div className='news-section'>
                <div className='visualize-header'>
                    <ul>
                        <li>
                            <a href='/' className='link title'>
                                <i className="fas fa-viruses"></i>
                                {"      "}
                                Covid19
                            </a>
                        </li>
                        <li>
                            <a href='/' className='link selected'>
                                <i className="fas fa-newspaper"></i>
                                {"      "}
                                News
                            </a>
                        </li>
                        <li>
                            <a href='/visualize' className='link'>
                                <i className="fas fa-chart-bar"></i>
                                {"      "}
                                Visualize
                            </a>
                        </li>
                        <li>
                            <a href='/about' className='link'>
                                <i className="fas fa-user"></i>
                                {"      "}
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <br />
                <div className='m-y5'></div>
                <div className='my-container'>
                    <h2>Covid News</h2>
                    <div className='grid-options'>
                        Select Layout: 
                        <button 
                        className={layout == 'large' ? 'grid-option selected' : 'grid-option'}
                        onClick={(e) => {setLayout('large')}}>
                            <i className='fas fa-grip-lines'></i>
                        </button>
                        <button 
                        className={layout == 'medium' ? 'grid-option selected' : 'grid-option'}
                        onClick={(e) => {setLayout('medium')}}>
                            <i className='fas fa-th-large'></i>
                        </button>
                        <button 
                        className={layout == 'small' ? 'grid-option selected' : 'grid-option'}
                        onClick={(e) => {setLayout('small')}}>
                            <i className='fas fa-th'></i>
                        </button>
                    </div>
                    <div className='news-cards-container'>
                        {data.articles.map(each => {
                            return (
                            <div className={`news-card ${layout}`} key={each.title}>
                                <div className='news-card-image'>
                                    <img src={each.urlToImage} alt={each.title} />
                                </div>
                                <div className='news-card-description'>
                                    <p className='title'>
                                        {each.title}
                                    </p>
                                    <div className='description'>
                                        {window.innerWidth > 900 ? each.description
                                        : each.description.length > 120 ? `${each.description.substring(0, 117)}...` : each.description}
                                    </div>
                                    <a href={each.url} target='_blank' className='open-button'>
                                        Open this Article <i className='fas fa-external-link-alt'></i> </a>
                                    <p className='endnote'>
                                        {`published by ${each.author} at ${each.publishedAt.substring(0, 10)}`} <i className='fas fa-pen-alt'></i>
                                    </p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>)}
        </>
    )
}
