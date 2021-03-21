import React, {useState} from 'react'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import {Link, Redirect} from "react-router-dom";
import TempHeader from "../shared/TempHeader";
import * as Yup from "yup"
import {useFormik} from "formik"


const LoginPage = ({isAuth, login}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const loginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("please enter your email!"),
        password: Yup.string().required("please enter password!")
    })

    const { handleChange, errors, handleSubmit, touched, values } = useFormik({
        initialValues:{
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values,{resetForm}) => {
            // console.log(values)
            login(values)
        }
    })

    if(isAuth){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    return (
        <div className="login-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>
                <Row className="w-100 h-75 login-page-container__content">
                    <Col md={7} className="login-page-container__gif-section"></Col>
                    <Col md={5} className="login-page-container__login-section d-flex justify-content-center flex-column align-items-center">

                        <h2>Log In</h2>
                        <form onSubmit={handleSubmit} >
                            <Form.Control
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                className="my-2"
                                onChange={handleChange}
                            />
                            {errors.email && touched.email ?
                                <div>{errors.email}</div>
                                :
                                null
                            }

                            <Form.Control
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                type="password"
                                className="my-2"
                                onChange={handleChange}
                            />
                            {errors.password && touched.password ?
                                <div>{errors.password}</div>
                                :
                                null
                            }

                            <Button
                                variant="primary"
                                className="my-2"
                                type="submit"
                            >Log In</Button>
                        </form>

                        <p className="login-page-container__login-section__signup-text">Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage