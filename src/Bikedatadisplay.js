import { useEffect, useState } from "react"
import axios from "axios"
const Bikedatadisplay = () => {
    const [mydata, setmyData] = useState([])

    const loadData = () => {
        let api = "http://127.0.0.1:8000/bikes/"
        axios.get(api)
            .then((res) => {
                setmyData(res.data) // Set state with res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadData()
    }, []) // Dependency array to ensure this runs only once

    const ans = mydata.map((key) => (
        <tr className="da">
            <td>{key.name}</td>
            <td>{key.biketype}</td>
            <td>{key.price}</td>
            <td>{key.image}</td>
            <td>{key.engine_capacity}</td>
            <td>{key.mileage}</td>
            <td>{key.transmission}</td>
            <td>{key.weight}</td>
            <td>{key.fuel_tank}</td>
            <td>{key.power}</td>
            <td>{key.tourque}</td>
        </tr>
    ))

    return (
        <>
            <h1>Bike Data Display</h1>
            <center>
            <table border="1 solid black" width="90%" align="center" className="tab">
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
                </tr>        
                {ans}
            </table>
            </center>
        </>
    )
}

export default Bikedatadisplay