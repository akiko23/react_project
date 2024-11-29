import React from "react";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            Menu
            <hr />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;