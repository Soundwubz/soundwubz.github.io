import React from 'react';
import Content from '../../components/Content';

class About extends React.Component {

    render() {
        return (
            <Content title="About Me">
                <div className="row">
                    <div className="col">
                        <p>this is some text about me</p>
                    </div>
                </div>
            </Content>
        )
    }
}

export default About;