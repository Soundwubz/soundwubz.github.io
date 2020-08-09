import React from 'react';
import './styles.css';

class ProItem extends React.Component {

    genLiveLink = () => {
        if(this.props.liveLink !== undefined && (this.props.offline === undefined || this.props.offline === false)) {
            return (
                <div className="col">
                    <a href={this.props.liveLink} target="_blank">Live Project</a>
                </div>
            )
        }
    }

    genGitLink = () => {
        if(this.props.ghLink !== undefined) {
            return (
                <div className="col">
                    <a href={this.props.ghLink} target="_blank">Github Repo</a>
                </div>
            )
        }
    }

    underMainenance = () => {
        if(this.props.offline === true) {
            return (
                <p style={{color: 'grey'}}>Offline for maintenance</p>
            )
        }
    }

    render() {
        return (
            <div className="item">
                <h3>
                    {this.props.title}
                </h3>
                {this.underMainenance()}
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