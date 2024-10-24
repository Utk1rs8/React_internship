import { useEffect, useState } from "react"
import axios from "axios"
const Accessoriesdatadisplay = () => {
    const [mydata, setmyData] = useState([])

    const loadData = () => {
        let api = "http://127.0.0.1:8000/accessories/"
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
            <td>{key.price}</td>
            <td>{key.image}</td>
        </tr>
    ))

    return (
        <>
            <h1>Accessories Data</h1>
            <center>
            <table border="1 solid black" width="90%" align="center" className="tab">
                <tr className="tra">
                    <th>Emp name</th>
                    <th>Emp price</th>
                    <th>Emp image</th>
                </tr>        
                {ans}
            </table>
            </center>
        </>
    )
}

export default Accessoriesdatadisplay