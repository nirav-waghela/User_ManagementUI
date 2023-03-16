import React, { Component, Fragment } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import {withRouter} from 'react-router-dom'

class AddProduct extends Component {
    render() {
        return (
            <Fragment>
                
                <Formik
                    initialValues={{ groupName: '', groupDescription: '', groupCategory: '' }}
                    validate={values => {
                        let errors = {};
                        if (values.groupName === "") {
                            console.log(values)
                            errors.groupName = "Group Name is Required"
                        }
                        if (values.groupCategory === "") {
                            errors.categroupCategorygory = "Group Category is Required"
                        } if (values.groupDescription === "") {
                            errors.groupDescription = "group Description is Required"
                        }
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        values.issueDate = new Date()
                        this.props.createGroup({...values,groupStatus:false})
                            .then(res => {
                                console.log(res)
                                if(res.payload.success){
                                    alert(res.payload.mesaage)
                                    this.props.history.push('/dashboard')
                                }
                            })
                            .catch(err => {
                                
                                console.log(err)
                            })
                    }}
                >
                    {({ errors, touched, handleSubmit }) => (

                        <Form id="productForm" onSubmit={handleSubmit}>
                            <Container >
                                <Row>
                                    <Col className='justify-content-center'>
                                        <Form.Group controlId="formBasicProductName">
                                            <Form.Label>Group Name</Form.Label>
                                            <Field
                                                type='text'
                                                name='groupName'
                                                className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`} />
                                            <ErrorMessage
                                                component='div'
                                                name='groupName'
                                                className="invalid-feedback" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='justify-content-center'>
                                        <Form.Group controlId="formBasicProductDescription">
                                            <Form.Label>Group Description</Form.Label>
                                            <Field
                                                type='text'
                                                name='groupDescription'
                                                className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`} />
                                            <ErrorMessage
                                                component='div'
                                                name='groupDescription'
                                                className='invalid-feedback' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='justify-content-center'>
                                        <Form.Group controlId="formBasicProductCategory">
                                            <Form.Label>Group Category</Form.Label>
                                            <Field
                                                type='text'
                                                name='groupCategory'
                                                className={`form-control ${touched.category && errors.category ? "is-invalid" : ""}`} />
                                            <ErrorMessage
                                                component='div'
                                                name='groupCategory'
                                                className="invalid-feedback" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    )}

                </Formik>
                {/* <Formik
                    initialValues={{ productName: '', productDescription: '', productCategory: '' }}
                    validate={values => {
                        let errors = {};
                        if (values.productName === "") {
                            errors.productName = "Product Name is Required"
                        }
                        if (values.productCategory === "") {
                            errors.productCategory = "Product Category is Required"
                        } if (values.productDescription === "") {
                            errors.productDescription = "Product Description is Required"
                        }
                    }}
                    onSubmit={(values) => {
                        values.issueDate = new Date()
                        this.props.addProduct(values)
                            .then(res => {
                                console.log(res)
                            })
                            .catch(err => console.log(err))
                    }}
                    >
                    {({ errors, touched, handleSubmit }) => (
                        <Form id='productForm' onSubmit={handleSubmit}>
                            <Container className="justify-content-xs-center">
                                <Row>
                                    <Col className='justify-content-center'>
                                        <Form.Group controlId='formBasicProductName'>
                                            <Form.label>Product Name</Form.label>
                                            <Field
                                                type='text'
                                                name='productName'
                                                placeholder='Enter Product name'
                                                className='form-control' />
                                            <ErrorMessage
                                                component="div"
                                                name="productName"
                                                className="invalid-feedback" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId='formBasicProductDescription'>
                                            <Form.label>Product Description</Form.label>
                                            <Field
                                                type='text'
                                                name='productDescription'
                                                placeholder='Enter Product name'
                                                className='form-control'/>
                                            <ErrorMessage
                                                component="div"
                                                name="productDescription"
                                                className="invalid-feedback" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId='formBasicProductCategory'>
                                            <Form.label>Product Category</Form.label>
                                            <Field
                                                type='text'
                                                name='productCategory'
                                                placeholder='Enter Product name'
                                                className='form-control'/>
                                            <ErrorMessage
                                                component="div"
                                                name="productCategory"
                                                className="invalid-feedback" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    )}

                </Formik> */}

            </Fragment>
        )
    }
}

export default withRouter(AddProduct);