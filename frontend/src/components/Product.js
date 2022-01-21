import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rate from "./Rate";
const Product = ({ product }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card style={{ width: "18rem" }} className='text-center my-2'>
        <Link className='link' to={`/product/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </Link>
        <Card.Body className='bg-dark'>
          <Card.Title>
            <Link className='link' to={`/product/${product._id}`}>
              {product.name}
            </Link>
          </Card.Title>
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
