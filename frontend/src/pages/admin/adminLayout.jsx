import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div>
            <h1>Admin Page</h1>
            <nav>
                <Link to={"/admin/adminDashboard"}>Dashboard</Link>
                <Link to={"/admin/userdetails"}>UserDetails</Link>
                <Link to={"/admin/settings"}>Settings</Link>
            </nav>
            {/*<p>Content</p>
            <p>Content</p>
            */}

        <Outlet/>
        {/*<p>Content</p>
        <p>Content</p>
        */}
        </div>
    );
}

export default Admin;