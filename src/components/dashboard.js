import React, { Component, Fragment } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts().then(res => console.log(res)).catch(err => console.log(err))
    }
    handleClick = (id) => {
        this.props.deleteProduct(id)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    }
    addProduct = () => {
        this.props.history.push('/addProduct')
    }
    render() {
        const { products } = this.props
        return (
            <Fragment>
                <Container>
                    <Row>
                        <div className="center">
                            <Button variant="primary" onClick={this.addProduct}>Add Product</Button>
                        </div>
                    </Row>
                    <Row className= "justify-content-md-center">

                        {products && products.length ?
                            (products.map(e => (
                                <Col xs={6} md={4}>
                                    <div style={{ paddingLeft: '20px', paddingBottom:'20px' }} key={e._id}>
                                        <Card style={{ width: '18rem' }} bg='secondary'>
                                            <Card.Body>
                                                <Card.Title>{e.productName}</Card.Title>
                                                <Card.Text>Description:{e.productDescription}</Card.Text>
                                                <Button variant="primary" onClick={() => this.update(e._id)}>Update</Button>
                                                <Button variant="danger" style={{marginLeft:'5px'}} onClick={() => this.handleClick(e._id)}>Delete</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )))
                            : null}
                    </Row>

                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Dashboard)