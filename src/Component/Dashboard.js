import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl text-center align-middle font-bold text-purple-500'>Welcome to your BlackCoffer Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4  overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addservice">Add Service</Link></li>
                        <li><Link to="/dashboard/manageorder">Manage Products</Link></li> 

                    <li><Link to="/dashboard/myCard">My Card</Link></li>
                    <li><Link to="/dashboard/addreview">Review</Link></li>

                </ul>

            </div>
            </div>
        </div>
    );
};

export default Dashboard;