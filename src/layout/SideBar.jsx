import React, { useState } from 'react'
import '../asset/style/layout/SideBar.css'
import { FaGripLines } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { routes } from '../Constatns'

function SideBar() {
    const [isActive, setisActive] = useState(false)
    return (
        <>
            <div className="dash-sidebar">
                <div className="sidebar-main-container">
                    <div className="sidebar-heading">
                        <span onClick={() => setisActive(!isActive)}>
                            {
                                isActive ? <RxCross1 /> : <FaGripLines />
                            }
                        </span>
                        <h2>Dashboard</h2>
                    </div>
                    <div className={isActive ? 'sidebar-menus active' : 'sidebar-menus'}>
                        <div className="menus">
                            <NavLink to={routes.Dashboard}><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path></svg>Dashboard</div></NavLink>
                            <NavLink to={routes.Users}><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg> Users</div></NavLink>
                            <NavLink to={routes.Accounts}><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"></path></svg>Account</div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar