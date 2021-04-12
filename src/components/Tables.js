import React from 'react';
import Table from "./Table";

const Tables = ({ projects, users, removeProject, removeUser }) => {
// console.log("state", projects, users)

    return (
        <div className="flex-box justify-evenly wrap">
            {!!projects.length && projects.map(project => {
                const associatedUsers = users.filter(user => user.project_id === project.id);
                return <Table key={project.id}
                              active={project.active}
                              projectID={project.id}
                              projectName={project.name}
                              users={associatedUsers}
                              removeProject={removeProject}
                              removeUser={removeUser} />
            })}
        </div>
    );
};

export default Tables;
