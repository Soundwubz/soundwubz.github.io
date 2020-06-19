import React from 'react';
import './styles.css';

class ProItem extends React.Component {

    genLiveLink = () => {
        if(this.props.liveLink !== undefined) {
            return (
                <div className="col">
                    <a href={this.props.liveLink}>Live Project</a>
                </div>
            )
        }
    }

    genGitLink = () => {
        if(this.props.ghLink !== undefined) {
            return (
                <div className="col">
                    <a href={this.props.ghLink}>Github Repo</a>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="item">
                <h3>
                    {this.props.title}
                </h3>
                <div className="item-cont">
                    <div className="row">
                        <div className="col">
                            <p>
                                {this.props.children}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        { this.genGitLink() }
                        { this.genLiveLink() }

                    </div>
                </div>
            </div>
        )
    }
}

export default ProItem