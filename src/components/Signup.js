import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import {withRouter} from 'react-router-dom'
import bcrypt from 'bcryptjs'


const salt = bcrypt.genSaltSync(12)


class SignUp extends Component {
  
    render() {
        console.log(this.props,"in signup")
        const {registerUser} = this.props
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        return (
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validate={values => {
                    let errors = {};
                    if (values.email === "") {
                        errors.email = "Email is required";
                    } else if (!emailTest.test(values.email)) {
                        errors.email = "Invalid email address format";
                    }
                    if (values.name === "") {
                        errors.name = "First name is Required"
                    }
                    // if (values.lastName === "") {
                    //     errors.lastName = "Last name is required"
                    // }
                    if (values.password === "") {
                        errors.password = "Password is required";
                    } else if (values.password.length < 3) {
                        errors.password = "Password must be 8 characters at minimum";
                    }
                    return errors;
                }}
                onSubmit={(values)=>{
                    console.log(values)
                    const hashedPassword = bcrypt.hashSync(values.password, salt)
                    this.props.registerUser({...values,approved:false,created_at:new Date(), role:1, password:hashedPassword})
                        .then(res=> { 
                            console.log(res,"+++++++")
                            alert('User created Successfully')
                            this.props.history.push('/login')     
                    })
                        .catch(err=> console.log(err))
                }}
            >
                {({ errors, touched, handleSubmit }) => (

                    <Form id='signupForm' onSubmit={handleSubmit}>
                        <Container className="justify-content-xs-center">
                            <Row>
                                <Col className='justify-content-center'>
                                    <Form.Group controlId="formBasicFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter First Name"
                                            className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`} />
                                        <ErrorMessage
                                            component='div'
                                            name='firstName'
                                            className='invalid-feedback' />
                                    </Form.Group>
                                </Col>
                                {/* <Col className='justify-content-center'>
                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Field 
                                        type="text" 
                                        name="lastName" 
                                        placeholder="Enter last name"
                                        className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} />
                                        <ErrorMessage 
                                            component='div'
                                            name='lastName'
                                            className= 'invalid-feedback'/>
                                    </Form.Group>
                                </Col> */}
                            </Row>
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
                                        className={`form-control ${touched.password && errors.password ? "is-invalid":""}`}/>
                                        <ErrorMessage 
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"/>
                                    </Form.Group>
                                    <Button variant="primary"  type="submit">
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

export default withRouter(SignUp)





