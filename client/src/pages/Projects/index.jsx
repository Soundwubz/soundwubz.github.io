import React from 'react';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

class Projects extends React.Component {


    render() {
        return (
            <Content title="My Projects">
                <div className="row">
                    <div className="col">
                        <p>hello world</p>
                    </div>
                </div>
                <Footer>
                    <div className="footer">
                        <p>Developed by: Nathan Foster</p>
                    </div>
                </Footer>
            </Content>
        )
    }
}

export default Projects;