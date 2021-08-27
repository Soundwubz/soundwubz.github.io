import React from 'react';

class NavList extends React.Component {

    render() {
        return(
            <div className="container-fluid">
                {this.props.children}
                <div className="row mt-5">
                    <div className="col text-center">
                        <a href="/">
                            <h1 className="text-white text-center nav-btn">Home</h1>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-5">
                        <a href="/about">
                            <h1 className="text-white text-center nav-btn">About</h1>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mt-5">
                        <a href="/projects">
                            <h1 className="text-white text-center nav-btn">Projects</h1>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavList;