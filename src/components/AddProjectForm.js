import React, {useState} from 'react';

const AddProjectForm = ({ addProject }) => {
    const [projectName, setProjectName] = useState("");
    const [sponsor, setSponsor] = useState("");
    const [active, setActive] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const submitFormHandler = (e) => {
        e.preventDefault();
        const projectData = {
            name: projectName,
            sponsor,
            active,
            project_start_date: startDate,
            project_end_date: endDate,
        };

        addProject(projectData);
        resetForm();
    };

    const resetForm = () => {
        setProjectName("");
        setSponsor("");
        setActive(false);
        setStartDate("");
        setEndDate("");
    };

    return (
        <form className="form-container" onSubmit={submitFormHandler}>
            <h4 style={{ marginBottom: "0.5rem" }}>Add Project</h4>
            <div className="form-control">
                <label>Project Name</label>
                <input type="text" placeholder="e.g. CHR" value={projectName} onChange={e => setProjectName(e.target.value)} required={true} />
            </div>
            <div className="form-control">
                <label>Sponsor</label>
                <input type="text" placeholder="e.g. NIEHS" value={sponsor} onChange={e => setSponsor(e.target.value)} required={true} />
            </div>
            <div className="form-control flex-box justify-unset align-center">
                <label style={{ marginRight: 5 }}>Active</label>
                <input type="checkbox" value={active} onChange={e => setActive(e.target.checked)} />
            </div>
            <div className="form-control">
                <label>Start Date</label>
                <input type="text" placeholder="MM/DD/YYYY" value={startDate} onChange={e => setStartDate(e.target.value)} required={true} />
            </div>
            <div className="form-control">
                <label>End Date</label>
                <input type="text" placeholder="MM/DD/YYYY" value={endDate} onChange={e => setEndDate(e.target.value)} required={true} />
            </div>
            <div className="form-control">
                <button type="submit" className="btn submit-btn">Add</button>
            </div>
        </form>
    );
};

export default AddProjectForm;
