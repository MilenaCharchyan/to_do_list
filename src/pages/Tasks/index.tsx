
import React from "react"
import { useAppSelector } from "../../app/hooks"
import { deleteTask, selectTask, toggleDone } from "../../features/task/taskSlice"
import { ITask } from "../../type/type";
import { useDispatch } from "react-redux";
import './style.css';
export const Task: React.FC = React.memo((): JSX.Element => {
    const { tasks } = useAppSelector(selectTask);//useappselectori ognutyamb reduxic vercnum enq tvyalnery
    console.log(tasks);
    const dispatch = useDispatch()

    return (
        <div>
            <h4> Task</h4>
            <div className="tasks">
                {tasks.map((elm: ITask) => {
                    return (
                        <div key={elm.id}>
                            <input type="checkbox" checked={elm.done} onChange={()=>dispatch(toggleDone(elm.id))}/>
                            <div style={elm.done?{ textDecoration: 'line-through' } : {textDecoration:"none"}}>
                                <span>{elm.name}</span> - 
                                <span>{elm.description}</span>
                            </div>
                            <button onClick={() => dispatch(deleteTask(elm.id))}>&times;</button>
                        </div>

                    )
                })}
            </div>
        </div>
    )
})