import React from 'react';
import './styles.css';

class Content extends React.Component {

    hasTitle = (title) => {
        if(title === undefined || title === "") {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const title = this.props.title;
        const hasTitle = this.hasTitle(title);
        return (
            <div className="container content">
                {hasTitle ? (
                    <div className="row title-row">
                        <div className="col-1"></div>
                        <div className="col title-cont">
                            <h1>
                                {this.props.title}
                            </h1>
                            {/* <div className="line"></div> */}
                        </div>
                        <div className="col-1"></div>
                    </div>
                ) : ( null )}
                <div className="row cont-row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Content;