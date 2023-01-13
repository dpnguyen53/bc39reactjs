//Giống định nghĩa slide master trong ppt
import React, { Component } from 'react'
import {NavLink,Outlet} from 'react-router-dom'
export default class HomeTemplate extends Component {
    render() {
        return (
            <>
                {/* b4-navbar-background */}
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/home">ReactJS</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/login">Login </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/user-management">user-management</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive ? 'bg-white text-dark nav-link' : 'nav-link'} style={({isActive})=> isActive ? {fontWeight:'bold'} : {} } to="/form-validation">Form Validation</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div style={{minHeight:'75vh'}}>
                    <Outlet />
                </div>
                <footer className='bg-dark p-3 text-center text-light'>Footer</footer>
            </>
        )
    }
}
