import React from 'react';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import './styles.css';
import anime from 'animejs';

class Home extends React.Component {
    imgUrl = process.env.PUBLIC_URL + '/img/';
    state = {
        navigate: false
    }

    animation() {
        anime({
            targets: '.nfPath',
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            strokeDashoffset: [anime.setDashoffset, 0],
        })
    }

    componentDidMount() {
        this.animation();
    }

    render() {
        const ghLogo = this.imgUrl + 'GitHub-Mark-Light-64px.png'
        return (
            <div></div>
            /* <Content title="Welcome">
                <div className="row">
                    <div className="col">
                        <p className="text-left mt-4 para">
                            I am a full stack application developer who is looking to hit the ground running in the field. 
                            I have a total of five years of development experience.
                            This website hosts my best works during my education and beyond. 
                        </p>
                    </div>
                    <div className="col-1 content-spacer"></div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <p className="text-right gh-text para">
                            Take a look at my Github pages to view my live projects.
                            You can also view the <a href="/projects" className="text-link">project page</a> for direct links to live websites.
                        </p>
                    </div>
                    <div className="w-100 col-break-576"></div>
                    <div className="col-bp-1 col-12" style={{paddingLeft: '0', textAlign: 'center'}}>
                        <a href="https://github.com/soundwubz" target="_blank" className="github">
                            <img src={ghLogo} alt="Github Logo" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign: 'center'}}>
                        <h2 className="mb-3">Inquiries or Collaboration?</h2>
                        <button className="btn contact-btn">
                            <svg className="bi bi-phone" style={
                                { marginTop: "14px", marginBottom: "18px" }
                            } width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                            <p style={{ display: "inline-block", margin: "7px 0px", paddingLeft: "10px"}}>Contact</p>
                        </button>
                    </div>
                </div>
                <Footer>
                    <div className="footer">
                        <p>Developed by: Nathan Foster</p>
                    </div>
                </Footer>
            </Content>*/
        )
    }
}

export default Home;