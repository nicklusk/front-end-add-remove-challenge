import React, {Component} from 'react';
import {PROJECTS} from './mock_data/projects';
import {USERS} from './mock_data/users';
import './App.css';
import Tables from "./components/Tables";
import Forms from "./components/Forms";

class App extends Component {
    constructor(props) {
        super(props);
        this.addProjectHandler = this.addProjectHandler.bind(this);
        this.removeProjectHandler = this.removeProjectHandler.bind(this);
        this.addUserToProjectHandler = this.addUserToProjectHandler.bind(this);
        this.removeUserFromProjectHandler = this.removeUserFromProjectHandler.bind(this);

        this.state = {
            projects: [],
            users: [],
        };
    };

    componentDidMount() {
        this.setState({
            users: [...USERS],
            projects: [...PROJECTS],
        });
    };

    addProjectHandler(newProject) {
        const newProjectObj = {...newProject, id: this.state.projects.length + 1};
        const updatedProjects = [...this.state.projects, newProjectObj];
        this.setState({projects: [...updatedProjects]});
        console.log("new", newProject, newProjectObj, updatedProjects)
    };

    removeProjectHandler(projectID) {
        const updatedProjects = this.state.projects.filter(project => !(project.id === projectID));
        const updatedUsers = this.state.users.filter(user => !(user.project_id === projectID));
        this.setState({
            projects: [...updatedProjects],
            users: [...updatedUsers],
        });
    };

    addUserToProjectHandler(newUser) {
        const newUserObj = {...newUser, id: this.state.users.length + 1};
        const updatedUsers = [...this.state.users, newUserObj];
        this.setState({users: [...updatedUsers]});
    };

    removeUserFromProjectHandler(userID) {
        const updatedUsers = this.state.users.filter(user => !(user.id === userID));
        this.setState({users: [...updatedUsers]});
    };

    render() {
        return (
            <div className="App">
                <header class="text-white" id="MRH-header">
                    <div id="login" class="fit-header">
                        <div class="user-menu-links">
                            <a href="http://mrh.duke.edu">CUSTOMIZE</a> | <a href="http://mrh.duke.edu">Nick Lusk</a>
                        </div>
                    </div>
                </header>
                <Tables projects={this.state.projects}
                        users={this.state.users}
                        removeProject={this.removeProjectHandler}
                        removeUser={this.removeUserFromProjectHandler}
                />
                <Forms addProject={this.addProjectHandler}
                       addUser={this.addUserToProjectHandler}
                       projects={this.state.projects}
                />
            </div>
        );
    };
}

export default App;
