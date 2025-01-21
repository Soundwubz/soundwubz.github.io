import React from 'react';
import './styles.css';

class Header extends React.Component {

    imgUrl = 'url(' + process.env.PUBLIC_URL + '/img';
    
    opBtnImg = {
        background: this.imgUrl + '/svg/menubutton.svg)',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    } 

    handleClick = () => {
        this.props.openNav();
    }

    render() {
        return (
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-2" style={{display: 'grid', justifyContent: 'center'}}>
                        {/* I will make an svg icon of some kind to appear */}
                    </div>
                    <div className="col-8">
                        {/* Navigation items will appear here centered in the Header */}
                    </div>
                    <div className="col-2" style={{justifyContent: "center", display: "flex"}}>
                        <div className="open-button" style={this.opBtnImg} onClick={this.handleClick}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;