import React, { Component } from "react";
import axios from "axios";
import SliderUpdate from './SliderUpdate'; // Import the SliderUpdate component

class SliderDataDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: [],
            selectedSlider: null,
            showUpdateForm: false,
        };
    }

    // Load data from the API
    loadData = () => {
        let api = "http://127.0.0.1:8000/slider/";
        axios.get(api)
            .then((res) => {
                this.setState({ mydata: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Load data on component mount
    componentDidMount() {
        this.loadData();
    }

    // Function to delete a record
    deleteRecord = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/slider/${id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                console.log("Record deleted successfully");
                // Update the state by removing the deleted item
                this.setState({
                    mydata: this.state.mydata.filter((item) => item.id !== id)
                });
            } else {
                console.error("Error deleting the record");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    // Function to open the update form
    openUpdateForm = (slider) => {
        this.setState({ selectedSlider: slider, showUpdateForm: true });
    };

    render() {
        const { mydata, selectedSlider, showUpdateForm } = this.state;

        const ans = mydata.map((key) => (
            <tr className="bike-row" key={key.id}>
                <td>{key.name}</td>
                <td>{key.price}</td>
                <td><img src={key.image} alt={key.name} className="bike-image" /></td> {/* Assuming image is a URL */}
                <td>
                    <button className="edit-button" onClick={() => this.openUpdateForm(key)}>Edit</button> {/* Pass the slider data to edit */}
                    <button className="delete-button" onClick={() => this.deleteRecord(key.id)}>Delete</button> {/* Pass the id to delete */}
                </td>
            </tr>
        ));

        return (
            <div id="bike-data-display">
                <center>
                    <h1 className="display-title">Slider Data List</h1>
                </center>
                <div className="table-container">
                    <table className="bike-table">
                        <thead>
                            <tr className="table-header">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Actions</th> {/* Change to Actions for clarity */}
                            </tr>
                        </thead>
                        <tbody>
                            {ans}
                        </tbody>
                    </table>
                </div>

                {showUpdateForm && (
                    <SliderUpdate slider={selectedSlider} onClose={() => this.setState({ showUpdateForm: false })} />
                )}
            </div>
        );
    }
}

export default SliderDataDisplay;
