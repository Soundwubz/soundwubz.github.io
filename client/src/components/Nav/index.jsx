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
                {/* <div className="container"> */}
                    
                {/* </div> */}
                <NavList>
                    <div className="row mb-5">
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