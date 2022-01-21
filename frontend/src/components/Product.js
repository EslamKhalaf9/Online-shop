import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import Rate from "./Rate";
const Product = ({ product }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card style={{ width: "18rem" }} className='text-center my-2'>
        <Card.Img variant='top' src={product.image} />
        <Card.Body className='bg-dark'>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text as='div'>
            <div className='my-3'>
              <Rate rating={product.rating} numReviews={product.numReviews} />
            </div>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
          {/* <Button variant='primary'>Add to Cart</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
