import axios from "axios";
import { useEffect,useState } from "react";
const Display =() =>{
    const [getTask,setTask] = useState([]);
    useEffect(()=>{
        getAllTask();
    },[]);

    const getAllTask = () =>{
         axios.get("/api/display").then(res =>setTask(res.data.data));
    };
    return(
        <table className = "table">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Date_Time</th>
                    {/* <th scope="col">Reminder</th> */}
                </tr>
            </thead>
            {
                getTask.map((item,index)=>{
                    return(
                        <tbody>
                            <tr key ={index}>
                                <td>{item.Task}</td>
                                <td>{item.date_time}</td>
                                {/* <td>{item.reminder}</td> */}
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )

}

export default Display;