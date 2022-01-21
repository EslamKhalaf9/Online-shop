import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Card, Row, ListGroup, Button, Image } from "react-bootstrap";

import products from "../products";
import Rate from "../components/Rate";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const myProduct = products.find((p) => p._id === id);
    setProduct(myProduct);
  }, []);
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='bg-dark'>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark'>
              <Rate rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark'>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item className='bg-dark'>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item className='bg-dark'>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className='bg-dark'>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark'>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
