import React from "react"
import { NavLink } from "react-router-dom"
import './style.scss'
export const Menu: React.FC = React.memo((): JSX.Element => {
    return(
        <div className="menu">
            <ul>
                <li><NavLink to={'/'}>Task</NavLink></li>
                <li><NavLink to={'/add-task'}>Add task</NavLink></li>
            </ul>
        </div>
    )
})