import React from 'react';
import AddProjectForm from "./AddProjectForm";
import AddUserForm from "./AddUserForm";

const Forms = ({ addProject, addUser, projects }) => {
    return (
        <div className="flex-box justify-evenly wrap">
            <AddProjectForm addProject={addProject} />
            <AddUserForm addUser={addUser} projects={projects} />
        </div>
    );
};

export default Forms;
