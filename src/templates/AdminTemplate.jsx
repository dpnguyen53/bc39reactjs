import React, { Component } from 'react'
import { NavLink,Outlet } from 'react-router-dom'
export default class AdminTemplate extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='w-25 p-3 bg-dark text-white' style={{minHeight:'100vh'}}>
                    <div className='logo'>
                        <img src='https://i.pravatar.cc?u=1' alt='...' width={50} className="rounded-circle" />
                    </div>
                    <div className='dashboard'>
                        <h3>Dashboard</h3>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={'/admin/users'}>Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/admin/products'}>Products</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='w-75'>
                    <Outlet />
                </div>

            </div>
        )
    }
}
