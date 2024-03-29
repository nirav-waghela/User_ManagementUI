import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import {withRouter} from 'react-router-dom'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(12)


class Login extends Component {
    render() {
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return (
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (values.email === "") {
                        errors.email = "Email is required";
                    } else if (!emailTest.test(values.email)) {
                        errors.email = "Invalid email address format";
                    }
                    if (values.password === "") {
                        errors.password = "Password is required";
                    } else if (values.password.length < 3) {
                        errors.password = "Password must be 8 characters at minimum";
                    }
                    return errors;
                }}
                onSubmit={(values)=>{
                    const hashedPassword = bcrypt.hashSync(values.password, salt)
                    this.props.validateUser({...values,password:hashedPassword})
                    .then(res=>{
                        console.log(res)
                        if(res.payload.success && res.payload.userData.approved && res.payload.userData.role === 1){
                            // alert(res.payload.message)
                            localStorage.setItem('token',JSON.stringify(res.payload.token))
                            this.props.history.push('/dashboard')
                        }else if (res.payload.success  && res.payload.userData.role === 0){
                            localStorage.setItem('token', JSON.stringify(res.payload.token))
                            this.props.history.push('/admin')
                        }
                        else{
                            alert('Admin needs to approve your request')
                        }
                    })
                    .catch(err => console.log(err))
                }}
            >
                {({ errors, touched,handleSubmit }) => (
                    <Form id='loginForm' onSubmit={handleSubmit}>
                        <Container className="justify-content-xs-center">
                            <Row>
                                <Col className='justify-content-center'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Field 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter email"
                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} />
                                        <ErrorMessage 
                                            component="div"
                                            name="email"
                                            className="invalid-feedback"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Field 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`} />
                                        <ErrorMessage 
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"/>
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

        )
    }
}

export default withRouter(Login);