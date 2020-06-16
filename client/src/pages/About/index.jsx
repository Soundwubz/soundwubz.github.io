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
                        <p>
                            Through DCTS, I was given the opprotunity to work alongside .NET Framework developers at the Capital Area Intermediate Unit in Enola, Pennsylvania.
                            There I learned how to work alongside of a team in production. 
                            I started out working on ADA Compliance testing on the Capital Area's local school district web sites.
                            Eventually I learned enough from my peers to create Angular components in a production application. 
                        </p>
                        <p>
                            I recently completed the Univeristy of Pennsylvania's coding bootcamp.
                            The program took me through each component of full stack web development.
                            We worked in the MERN Stack specifically, learning new skills with React, Node, Express, Mongoose, and more.
                            My projects developed during this course are available to browse on the <a href="/projects" className="text-link">projects page</a>.
                        </p>
                    </div>
                </div>
            </Content>
        )
    }
}

export default About;