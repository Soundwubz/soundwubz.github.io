import React from 'react';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import ProItem from '../../components/ProItem';
import './styles.css';

class Projects extends React.Component {


    render() {
        return (
            <Content title="My Projects">
                <div className="row">
                    <div className="col">
                        <div className="projects">
                            <div className="row mt-5">
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"NORT"}
                                        ghLink={"https://github.com/Soundwubz/NORT"}
                                        liveLink={"https://nort-game.herokuapp.com/"}
                                    >
                                        This is NORT
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-single-col"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Purlwise"}
                                        ghLink={"https://github.com/Soundwubz/purlwise"}
                                        liveLink={"https://purlwise.herokuapp.com/"}
                                    >
                                        This is Purlwise
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-col-break"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Friend Finder"}
                                        ghLink={"https://github.com/Soundwubz/FriendFinder"}
                                        liveLink={"https://serene-bastion-60928.herokuapp.com/"}
                                    >
                                        This is Friend Finder
                                    </ProItem>
                                </div>
                            {/* </div> */}
                            {/* <div className="row mt-5"> */}
                                <div class="w-100 pro-single-col"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"LIRI"}
                                        ghLink={"https://github.com/Soundwubz/liri-node-app"}
                                    >
                                        This is LIRI
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-col-break"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Animal Search Service"}
                                        ghLink={"https://soundwubz.github.io/project-1/"}
                                        liveLink={"https://github.com/Soundwubz/project-1/"}
                                    >
                                        This is Animal Search Service
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-single-col"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"MP Rock Paper Scissors"}
                                        ghLink={"https://github.com/Soundwubz/Multiplayer-RPS/"}
                                        liveLink={"https://soundwubz.github.io/Multiplayer-RPS/"}
                                    >
                                        This is Rock Paper Scissors
                                    </ProItem>
                                </div>
                            {/* </div> */}
                            {/* <div className="row mt-5"> */}
                                <div class="w-100 pro-col-break"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Giphy Search"}
                                        ghLink={"https://github.com/Soundwubz/giphy-search/"}
                                        liveLink={"https://soundwubz.github.io/giphy-search/"}
                                    >
                                        This is Giphy Search
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-single-col"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Star Wars RPG"}
                                        ghLink={"https://github.com/Soundwubz/Star-Wars-RPG/"}
                                        liveLink={"https://soundwubz.github.io/Star-Wars-RPG/"}
                                    >
                                        This is Star Wars RPG
                                    </ProItem>
                                </div>
                                <div class="w-100 pro-col-break"></div>
                                <div className="col-bp-4 col-bp-6 col-12 mt-2">
                                    <ProItem
                                        title={"Word Guess Game"}
                                        ghLink={"https://github.com/Soundwubz/Word-Guess-Game/"}
                                        liveLink={"https://soundwubz.github.io/Word-Guess-Game/"}
                                    >
                                        This is Word Guess Game
                                    </ProItem>
                                </div>
                            </div>
                        </div>
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