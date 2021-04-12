import React, { useState } from 'react';

const AddUserForm = ({ addUser, projects }) => {
    const [username, setUsername] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [projectID, setProjectID] = useState(1);

    const submitFormHandler = (e) => {
        e.preventDefault();
        const userData = {
            name: username,
            department,
            role,
            project_id: projectID,
        };

        addUser(userData);
        resetForm();
    };

    const resetForm = () => {
        setUsername("");
        setDepartment("");
        setRole("");
        setProjectID(1);
    };

    return (
        <form className="form-container" onSubmit={submitFormHandler}>
            <h4 style={{ marginBottom: "0.5rem" }}>Add User</h4>
            <div className="form-control">
                <label>User Name</label>
                <input type="text" placeholder="e.g. John" value={username} onChange={e => setUsername(e.target.value)} required={true} />
            </div>
            <div className="form-control">
                <label>Department</label>
                <input type="text" placeholder="e.g. Medicine" value={department} onChange={e => setDepartment(e.target.value)} required={true} />
            </div>
            <div className="form-control">
                <label>Role</label>
                <input type="text" placeholder="Key Personnel" value={role} onChange={e => setRole(e.target.value)} required={true} />
            </div>
            <div className="form-control flex-box justify-unset align-center">
                <label style={{ marginRight: 15 }}>Project</label>
                <select value={projectID} onChange={e => setProjectID(parseInt(e.target.value))}>
                    {!!projects.length && projects.map(project => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-control">
                <button type="submit" className="btn submit-btn">Add</button>
            </div>
        </form>
    )
};

export default AddUserForm;
