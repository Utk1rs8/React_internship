import { useEffect, useState } from "react";
import axios from "axios";
import AccessoriesUpdate from './AccessoriesUpdate'; // Import the update component

const Accessoriesdatadisplay = () => {
    const [mydata, setmyData] = useState([]);
    const [selectedAccessory, setSelectedAccessory] = useState(null); // State to track the selected accessory for editing

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

    // Function to handle edit
    const handleEdit = (accessory) => {
        setSelectedAccessory(accessory); // Set the selected accessory to edit
    };

    // Map through data and display it in a table
    const ans = mydata.map((key) => (
        <tr className="da" key={key.id}>
            <td>{key.name}</td>
            <td>{key.price}</td>
            <td><img src={key.image} alt={key.name} width="100" /></td> {/* Assuming image is a URL */}
            <td>
                <button onClick={() => handleEdit(key)}>Edit</button> {/* Button to edit the record */}
                <button onClick={() => deleteRecord(key.id)}>Delete</button> {/* Pass the id to delete */}
            </td>
        </tr>
    ));

    return (
        <>
            <h1>Accessories Data</h1>
            <center>
                <table border="1 solid black" width="90%" align="center" className="tab">
                    <thead>
                        <tr className="tra">
                            <th>Emp name</th>
                            <th>Emp price</th>
                            <th>Emp image</th>
                            <th>Actions</th> {/* Updated header to include actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            </center>
            {selectedAccessory && <AccessoriesUpdate accessory={selectedAccessory} onClose={() => setSelectedAccessory(null)} />} {/* Render the update form if an accessory is selected */}
        </>
    );
};

export default Accessoriesdatadisplay;
