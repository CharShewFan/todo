import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function LeftSideBar(props){

    let my_day,planned,tasks = [];
    let important = [];


    return(
        <div className="main">
            <div className="profile">
                <img src="#" alt=""/>
            </div>

            <div className="fixed-list">
                <ul>
                    <li><Link to="/my-day">My day </Link></li>
                    <li><Link to="/Important">Important</Link></li>
                    <li><Link to="/Planned">Planned</Link></li>
                    <li><Link to="/Task">Tasks</Link></li>
                </ul>
            </div>

            <div className="customize-list-main">
                <ul>
                    <li></li>
                </ul>

                <button>add list</button>

            </div>

        </div>
    )
}

export default LeftSideBar;