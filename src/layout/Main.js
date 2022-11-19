import React from 'react';
import { Outlet } from 'react-router-dom';
import MainFolder from '../Pages/./MainFolder/./MainFolder'
import AddFolder from '../Pages/AddFolder/AddFolder';

const Main = () => {
    return (
        <div>
            <MainFolder></MainFolder>
            <AddFolder></AddFolder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;