import { Link, Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div id="admin-dashboard">
            <h1 className="dashboard-title">Admin Dashboard</h1>
                        
            <nav className="dashboard-nav">
                <Link to="../datainsert" className="dashboard-link">Data Insert</Link>
                <span className="Seprate-line">|</span>
                <Link to="../sliderdetail" className="dashboard-link">Slider Detail</Link>
                <span className="Seprate-line">|</span>
                <Link to="../accessories" className="dashboard-link">Accessories Details</Link>
            </nav>
            
            <Outlet />
        </div>
    );
}

export default AdminDashboard;
