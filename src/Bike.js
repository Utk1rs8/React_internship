import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

const Bike = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    
    const loadData = () => {
        let url = "http://127.0.0.1:8000/bikes/";
        axios.get(url).then((res) => {
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const productAns = mydata.map((product, index) => {
        return (
            <div key={index} className="shoe-box">
                <FaCartShopping className="cart-but" />
                <img src={product.image} alt={product.name} width="300" />
                <center>
                    <h1 className="prod-name">Running Shoes</h1>
                    <h1 className="prod-nam">{product.name}</h1>
                    <div className="prod-div">
                        <h2 className="prod-pri1">$72.00</h2>
                        <h2 className="prod-pri2">${product.price}</h2>
                    </div>
                </center>
            </div>
        );
    });

    return (
        <>
            <h1>This is My Bike page</h1>
            <div className="shop-div">
                <div className="product-box">
                    {productAns}
                </div>
            </div>
        </>
    );
};

export default Bike;
