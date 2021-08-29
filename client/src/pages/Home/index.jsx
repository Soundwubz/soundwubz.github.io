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
            // <div></div>
            <Content title="Welcome">
                <div className="row">
                    <div className="col">
                        <p className="text-left mt-4 para">
                            Welcome to my developer portfolio. Here you can follow any of my projects and
                            view their respective repositories. My specialty is web development, but I am branching out 
                            into iOS development as well. Coding is a passion and art to me, and I hope to share it in 
                            a meaningful way.
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
                <div className="row row-cols-2" style={{margin: "0 auto"}}>
                    <div className="col-4">
                        <div className="alert-badge" style={
                            {background: "url(" + this.imgUrl + "svg/alert.svg)",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"}
                        }></div>
                    </div>
                    <div className="col-6">
                        <p style={{textAlign: "center", paddingTop: "16px"}}>Site is still under maintainence</p>
                    </div>
                </div>
                {/* 
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
                </Footer> */}
                <Footer>
                    <p>Designed by Nate</p>
                    <p style={{fontSize: ".5rem"}}>probably in a basement</p>
                </Footer>
            </Content>
        )
    }
}

export default Home;