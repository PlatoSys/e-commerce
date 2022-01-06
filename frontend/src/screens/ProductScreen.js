import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating';
import { useMatch } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductScreen() {
    const match = useMatch('/product/:id');
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productDetails);
    const {error, loading, product} = productList

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match.params.id])

    return (
        <React.Fragment>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
            :
            
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            {product.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Button disabled={product.countInStock === 0} className='btn-block' type='button'>
                                    Add To Cart
                                </Button>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
            </Row>}
        </React.Fragment>
    )
}

export default ProductScreen
