import React from 'react'
import './About.css'
import Title from './Title'

export default function About() {
    return (
        <div className='about-section'>
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
                        <a href='/news' className='link'>
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
                        <a href='/about' className='link selected'>
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
                <Title text='About Website' />
                <div className='about-website'>
                    <div className='text-card'>
                        <div className='text-card-title'>
                            What's CoviStats ?
                        </div>
                        <div className='text-card-description'>
                            CoviStats is a website developed to track
                            covid19 cases across the world. You can compare the
                            statistics of two different states in India. And you can also
                            get latest news related to covid19 in this website. So what are you waiting for,
                            explore the website and any kind of improvements are appreciated. Thank you!
                        </div>
                    </div>

                    <div className='text-card'>
                        <div className='text-card-title'>
                            What are the technologies used ?
                        </div>
                        <div className='text-card-description'>
                            <ul>
                                <li>
                                    <i className="fab fa-html5" style={{color: '#F34A36'}}></i> HTML 
                                </li>
                                <li>
                                    <i className="fab fa-css3-alt" style={{color: '#1A6FB4'}}></i> CSS
                                </li>
                                <li>
                                    <i className="fab fa-js" style={{color: '#E9D44D'}}></i> JavaScript
                                </li>
                                <li>
                                    <i className="fab fa-react" style={{color: '#15D1F7'}}></i> ReactJS 
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-card'>
                        <div className='text-card-title'>
                            What are the APIs used ?
                        </div>
                        <div className='text-card-description'>
                            <ul>
                                <li>
                                    <i className="far fa-hand-point-right"></i> {"   "}
                                    covid19 API for covid cases statistics
                                </li>
                                <li>
                                    <i className="far fa-hand-point-right"></i> {"   "}
                                    Apexcharts for data visualization
                                </li>
                                <li>
                                    <i className="far fa-hand-point-right"></i> {"   "}
                                    News API for covid related news
                                </li>
                                <li>
                                    <i className="far fa-hand-point-right"></i> {"   "}
                                    d3-scale & simple maps for homepage
                                </li>
                                <li>
                                    <i className="far fa-hand-point-right"></i> {"   "}
                                    And finally Firebase to deploy
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='text-card'>
                        <div className='text-card-title'>
                            About developer ?
                        </div>
                        <div className='text-card-description'>
                            I am sravan, CS undergrad and an aspiring full stack developer.
                            I am working as Ruby on Rails developer in Promptcloud. Here are my profiles:
                            <ul>
                                <li>
                                    <i className="fab fa-linkedin"></i> {"   "}
                                    <a href='https://www.linkedin.com/in/shashil-sravan-a5b201191/' target='_blank'>
                                        linkedin account</a>
                                </li>
                                <li>
                                    <i className="fab fa-github"></i> {"   "}
                                    <a href='https://github.com/shashilsravan/' target='_blank'>
                                        Github profile</a>
                                </li>
                                <li>
                                    <i className="fab fa-hackerrank"></i> {"   "}
                                    <a href='https://www.hackerrank.com/shashilsravan_s1' target='_blank'>
                                        Hackerrank profile</a>
                                </li>
                                <li>
                                    <i className="far fa-file-alt"></i> {"   "}
                                    <a href='https://drive.google.com/file/d/1F2GmvoD_9aKVeFC1ni_0QJAEeTDZ6VRi/view?usp=sharing' target='_blank'>
                                        My resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
