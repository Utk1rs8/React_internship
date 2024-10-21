import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <>
      <Card style={{ width: "inherit", border:"0", backgroundColor:"whitesmoke", borderRadius:"2px" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            ₹ {props.price}
          </Card.Text>
          <div className="product-actions">
            <Button id="Buy-now" variant="primary">Buy Now</Button>
            <Button id="Add-to-Cart" variant="secondary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
