import React from 'react';

const Table = ({ projectName, projectID, active, users, removeProject, removeUser }) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th colSpan={4}>
                        <div className="flex-box justify-space-between">
                            <h5>{ projectName }</h5>
                            <div className="flex-box align-center">
                                <button className="btn remove-project-btn" onClick={() => removeProject(projectID)}>
                                    Remove Project
                                </button>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th style={{ width: "30%" }}>User</th>
                    <th style={{ width: "30%" }}>Department</th>
                    <th colSpan={2} style={{ width: "40%" }}>Role</th>
                </tr>
                </thead>

                <tbody>
                { !!users.length && users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.department}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className="btn remove-user-btn" onClick={() => removeUser(user.id)}>
                                x
                            </button>
                        </td>
                    </tr>
                )) }

                { !users.length && <tr><td style={{ textAlign: "center" }} colSpan={4}>No users</td></tr> }
                <tr>
                    <td colSpan={4}>
                        <span className={active ? "status active" : "status draft" }>{ active ? "Active" : "Draft" }
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
