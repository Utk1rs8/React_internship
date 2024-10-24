import { useEffect, useState } from "react";
import axios from "axios";

const Bikedatadisplay = () => {
    const [mydata, setmyData] = useState([]);

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

    // Map through data and display it in a table
    const ans = mydata.map((key) => (
        <tr className="da" key={key.id}>
            <td>{key.name}</td>
            <td>{key.biketype}</td>
            <td>{key.price}</td>
            <td><img src={key.image} alt={key.name} width="100" /></td> {/* Assuming image is a URL */}
            <td>{key.engine_capacity}</td>
            <td>{key.mileage}</td>
            <td>{key.transmission}</td>
            <td>{key.weight}</td>
            <td>{key.fuel_tank}</td>
            <td>{key.power}</td>
            <td>{key.tourque}</td>
            <td><button onClick={() => deleteRecord(key.id)}>Delete</button></td> {/* Pass the id to delete */}
        </tr>
    ));

    return (
        <>
            <h1>Bike Data Display</h1>
            <center>
                <table border="1 solid black" width="90%" align="center" className="tab">
                    <thead>
                        <tr className="tra">
                            <th>Emp name</th>
                            <th>Emp biketype</th>
                            <th>Emp price</th>
                            <th>Emp image</th>
                            <th>Emp engine_capacity</th>
                            <th>Emp mileage</th>
                            <th>Emp transmission</th>
                            <th>Emp weight</th>
                            <th>Emp fuel_tank</th>
                            <th>Emp power</th>
                            <th>Emp tourque</th>
                            <th>Delete Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            </center>
        </>
    );
};

export default Bikedatadisplay;
