import React from 'react';
import './styles.css';
import NavList from './NavList';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { navResize: '-35%' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        let width = window.innerWidth;
        if(width <= 768 && width > 576) {
            this.setState({navResize: '-45%'})
        } 
        else if (width <= 576 && width > 414) {
            this.setState ({navResize: '-50%'})
        } 
        else if (width <= 414) {
            this.setState ({navResize: '-100%'})
        }
    }

    imgUrl = 'url(' + process.env.PUBLIC_URL + '/img';
    closeBtn = {
        background: this.imgUrl + '/close-button.png)',
        backgroundSize: 'contain'
    }

    handleClick = () => {
        this.props.closeNav();
    }
    
    render(){
        let navStyle = this.props.navToggle  ? {
            right: '0',
            borderRadius: '0px'
        } : {
            right: this.state.navResize,
            borderRadius: '200px 0px 0px 200px'
        }
        return (
            <div className="nav" style={navStyle}>
                <NavList>
                    <div className="row mt-2 mb-5">
                        <div className="col-8"></div>
                        <div className="col-4" style={{justifyContent: 'center', display: 'flex'}}>
                            <div className="close-btn" style={this.closeBtn} onClick={this.handleClick}></div>
                        </div>
                    </div>
                </NavList>
            </div>
        )
    }
}

export default Nav;