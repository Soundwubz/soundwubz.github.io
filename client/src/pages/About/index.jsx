import React from 'react';
import Content from '../../components/Content';

class About extends React.Component {
    imgUrl = process.env.PUBLIC_URL + '/img/';
    profileStyles = {
        background: "url(" + this.imgUrl + "profshot.jpeg",
        backgroundSize: "contain",
        width: "125px",
        height: "125px",
        borderRadius: "10px"
    }
    render() {
        return (
            <Content title="About Me">
                <div className="row mt-5">
                    <div className="col">
                        <p className="pl-3">
                            I’ve lived in Harrisburg, Pennsylvania my entire life.
                            I have always had a deep fascination with technology.
                            It’s been my dream for years to not only obtain a career in technology, but also to have a good impact on the world with technology.
                            Although I’m extremely nerdy about technology, it isn’t my only hobby.
                            I am also a car enthusiast who just enjoys a chance to get out on the open road for relaxation.
                        </p>
                    </div>
                    <div className="col-2">
                        <div style={this.profileStyles}></div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-9"></div>
                    <div className="col text-right">
                        <h2>Education</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-right">
                        <p>
                            Before starting high school, just the thought of learning how to code seemed too difficult of a task for me to overcome.
                            However, I attended the Dauphin County Technical School for my high school years, and I was introduced to the world of coding.
                            While attending normal core classes, I learned basic web development.
                            Over the course of four years I was taught about HTML, CSS, and JavaScript.
                            I also had the time to branch off and work on my own special projects to experiment with different languages. 
                        </p>
                    </div>
                </div>
            </Content>
        )
    }
}

export default About;