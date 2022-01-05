import axios from 'axios';
import { useState } from 'react';

const AddTask = () => {
    const [getTask, setTask] = useState([{
        Task: "",
        date_time: "",
        reminder: ""
    }]);

    const addTask = () => {
        axios.post("/api/AddTask", getTask).then((res) => { console.log(res.data) });
    };

    return (
        <div className="container">
            <div className="table">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Task</label>
                            <input type="text" onChange={(e) => setTask({ ...getTask, Task: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Task" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">date_Time</label>
                            <input type="date" onChange={(e) => setTask({ ...getTask,date_time: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="date time" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">reminder</label>&nbsp;
                            <input
                                type="checkbox"
                                onChange={(e) => setTask({...getTask,reminder:e.currentTarget.checked})}
                            />
                        </div>
                        <div class="mb-3">
                            <button type="button" onClick={addTask} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddTask;