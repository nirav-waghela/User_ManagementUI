import React, { Component, Fragment } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class Dashboard extends Component {
    componentDidMount() {
        this.props.getAllGroups({status:'ALL'}).then(res => console.log(res)).catch(err => console.log(err))
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
        const { allGroups } = this.props
        console.log(this.props,"%%%%%%%%%%%%%%%%")
        return (
            <Fragment>
                <Container>
                    <Row>
                        <div className="center">
                            <Button variant="primary" onClick={this.addProduct}>Create Group</Button>
                        </div>
                    </Row>
                    <Row className= "justify-content-md-center">

                        {allGroups && allGroups.length ?
                            (allGroups.map(e => (
                                <Col xs={6} md={4} key={e._id}>
                                    <div style={{ paddingLeft: '20px', paddingBottom:'20px' }} key={e._id}>
                                        <Card style={{ width: '18rem' }} bg='secondary'>
                                            <Card.Body>
                                                <Card.Title>{e.groupName}</Card.Title>
                                                <Card.Text>Description:{e.groupDescription}</Card.Text>
                                                {/* <Button variant="primary" onClick={() => this.update(e._id)}>Update</Button> */}
                                                {/* <Button variant="danger" style={{marginLeft:'5px'}} onClick={() => this.handleClick(e._id)}>Delete</Button> */}
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