import { Link, Outlet } from "react-router-dom";

const AdminDashboard=()=>{
    return(
        <>
        
        <h1>AdminDashboard page</h1>

        <h1>Product Detail</h1>
        <Link to="../datainsert">datainsert</Link>
        <Outlet/>
        </>
    )
}

export default AdminDashboard;