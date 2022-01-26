import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Col, Card, Row, ListGroup, Button, Image } from "react-bootstrap";

import Rate from "../components/Rate";
import { productDetails } from "../redux/actions/productActions";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  const addToCartHandeller = () => {
    navigate(`/cart/${id}/?qty=${qty}`, { replace: true });
  };
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
                  <Rate
                    rating={product.rating || 0}
                    numReviews={product.numReviews || 0}
                  />
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
                    <Row>
                      <Col>
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          className='w-100 py-2 px-1'
                        >
                          {product.countInStock > 0
                            ? [...Array(product.countInStock).keys()].map(
                                (i) => (
                                  <option key={i} value={i + 1}>
                                    {i + 1}
                                  </option>
                                )
                              )
                            : null}
                        </select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className='bg-dark'>
                    <Button
                      className='btn-block w-100 my-2'
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandeller}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDetails;
