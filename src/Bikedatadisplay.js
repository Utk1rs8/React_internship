import { useEffect, useState } from "react";
import axios from "axios";
import DataUpdate from './BikeDataUpdate'; // Import the DataUpdate component

const Bikedatadisplay = () => {
    const [mydata, setmyData] = useState([]);
    const [selectedBike, setSelectedBike] = useState(null); // State to hold the selected bike for editing
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control the visibility of the update form

    // Load data from the API
    const loadData = () => {
        let api = "http://127.0.0.1:8000/bikes/";
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
            const response = await axios.delete(`http://127.0.0.1:8000/bikes/${id}/`, {
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
    const openUpdateForm = (bike) => {
        setSelectedBike(bike);
        setShowUpdateForm(true);
    };

    // Map through data and display it in a table
    const ans = mydata.map((key) => (
        <tr className="bike-row" key={key.id}>
            <td>{key.name}</td>
            <td>{key.biketype}</td>
            <td>{key.price}</td>
            <td><img src={key.image} alt={key.name} className="bike-image" /></td>
            <td>{key.engine_capacity}</td>
            <td>{key.mileage}</td>
            <td>{key.transmission}</td>
            <td>{key.weight}</td>
            <td>{key.fuel_tank}</td>
            <td>{key.power}</td>
            <td>{key.tourque}</td>
            <td>
                <button className="edit-button" onClick={() => openUpdateForm(key)}>Edit</button>
                <button className="delete-button" onClick={() => deleteRecord(key.id)}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <div id="bike-data-display">
            <h1 className="display-title">Bike Data List</h1>
            <div className="table-container">
                <table className="bike-table">
                    <thead>
                        <tr className="table-header">
                            <th>Name</th>
                            <th>Bike Type</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Engine Capacity</th>
                            <th>Mileage</th>
                            <th>Transmission</th>
                            <th>Weight</th>
                            <th>Fuel Tank</th>
                            <th>Power</th>
                            <th>Torque</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            </div>

            {showUpdateForm && (
                <DataUpdate bike={selectedBike} onClose={() => setShowUpdateForm(false)} />
            )}
        </div>
    );
};

export default Bikedatadisplay;
