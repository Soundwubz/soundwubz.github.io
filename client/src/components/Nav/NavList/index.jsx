import React from 'react';

class NavList extends React.Component {

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                        <a href="/">
                            <h1 className="text-white text-center nav-btn">Home</h1>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a href="/about">
                            <h1 className="text-white text-center nav-btn">About</h1>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
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