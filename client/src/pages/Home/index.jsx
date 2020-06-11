import React from 'react';
import Content from '../../components/Content';

class Home extends React.Component {
    state = {
        navigate: false
    }

    render() {
        return (
            <Content title="Welcome">
                <div className="row">
                    <div className="col">
                        <p>Hello World</p>
                    </div>
                </div>
            </Content>
        )
    }
}

export default Home;