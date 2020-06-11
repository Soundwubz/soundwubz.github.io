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
                    <div className="row">
                        <div className="col title-cont">
                            <h1 className="title">
                                {this.props.title}
                            </h1>
                            <div className="line"></div>
                        </div>
                    </div>
                ) : ( null )}
                {this.props.children}
            </div>
        )
    }
}

export default Content;