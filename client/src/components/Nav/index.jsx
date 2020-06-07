import React from 'react';
import './styles.css';
import NavList from './NavList';

class Nav extends React.Component {

    imgUrl = 'url(' + process.env.PUBLIC_URL + '/img';
    closeBtn = {
        background: this.imgUrl + '/close-button.png)',
        backgroundSize: 'contain'
    }

    handleClick = () => {
        this.props.closeNav();
    }
    
    render(){
        let navStyle = this.props.navToggle ? {
            right: '0'
        } : {
            right: '-35%'
        }
        return (
            <div className="nav" style={navStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <div className="close-btn" style={this.closeBtn} onClick={this.handleClick}></div>
                        </div>
                    </div>
                </div>
                <NavList></NavList>
            </div>
        )
    }
}

export default Nav;