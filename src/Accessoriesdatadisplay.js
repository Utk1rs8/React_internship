import { useEffect, useState } from "react";
import axios from "axios";
import AccessoriesUpdate from './AccessoriesUpdate'; // Import the update component

const Accessoriesdatadisplay = () => {
    const [mydata, setmyData] = useState([]);
    const [selectedAccessory, setSelectedAccessory] = useState(null); // State to track the selected accessory for editing
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control the visibility of the update form

    // Load data from the API
    const loadData = () => {
        let api = "http://127.0.0.1:8000/accessories/";
        axios.get(api)
            .then((res) => {
                setmyData(res.data); // Set state with res.data
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Load data on component mount
    useEffect(() => {
        loadData();
    }, []); // Empty dependency array to ensure this runs only once

    // Function to delete a record
    const deleteRecord = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/accessories/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                console.log("Record deleted successfully");
                // Update the state by removing the deleted item
                setmyData(mydata.filter((item) => item.id !== id));
            } else {
                console.error("Error deleting the record");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    // Function to open the update form
    const openUpdateForm = (accessory) => {
        setSelectedAccessory(accessory);
        setShowUpdateForm(true);
    };

    // Map through data and display it in a table
    const ans = mydata.map((key) => (
        <tr className="accessory-row" key={key.id}>
            <td>{key.name}</td>
            <td>{key.price}</td>
            <td><img src={key.image} alt={key.name} className="accessory-image" /></td>
            <td>
                <button className="edit-button" onClick={() => openUpdateForm(key)}>Edit</button>
                <button className="delete-button" onClick={() => deleteRecord(key.id)}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <div id="accessory-data-display">
            <h1 className="display-title">Accessories Data List</h1>
            <div className="table-container">
                <table className="accessory-table">
                    <thead>
                        <tr className="table-header">
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            </div>

            {showUpdateForm && (
                <AccessoriesUpdate accessory={selectedAccessory} onClose={() => setShowUpdateForm(false)} />
            )}
        </div>
    );
};

export default Accessoriesdatadisplay;
