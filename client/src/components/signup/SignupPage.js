import React from 'react'
import TempHeader from "../shared/TempHeader";
import {Button, Col, Container, Image, Row, Form} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import SignupInputCol from "./SignupInputCol";
import * as Yup from "yup"
import {useFormik} from "formik"

const SignupPage = ({isAuth,signUp}) => {

    const signupSchema = Yup.object().shape({
        file: Yup.mixed(),
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your first name"),
        email: Yup.string().email("Invalid Email").required("Please enter your email"),
        password: Yup.string().required("password is required"),
        confirmPassword: Yup.string().when("password",{
            is: val=> (!!(val && val.length)), //double exclamation casts boolean
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "password doesn't match"
            )
        }),
        role: Yup.string(),
        description:Yup.string(),
        terms: Yup.bool().required().oneOf([true], 'terms must be accepted')
    })

    const { handleChange,errors, handleSubmit, touched, values } = useFormik({
        initialValues: {
            file:null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",
            role:"",
            terms:false
        },
        validationSchema: signupSchema,
        onSubmit: (values,{resetForm}) => {

            let { file, firstName, lastName, email, password, description, role } = values
            let enumRole = role==="1" ? "teamLead" : "user"

            //file key-value still needs to be configured

            let tempUserInfo = {
                firstName,
                lastName,
                email,
                password,
                description,
                role: enumRole
            }
            signUp(tempUserInfo)
        }
    })

    if(isAuth){
        return <Redirect to={"/"}/>
    }

    return (
        <div className="signup-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>


                <form onSubmit={handleSubmit}>
                    <div className="signup-page-container__content w-100 h-150 d-flex flex-column justify-content-between">
                        <Row className="h-75 ">
                            <Col className="signup-input-col">
                                <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                    <Image src="https://www.placehold.it/80x80" className="rounded-circle"></Image>

                                    <Form.Group>
                                        <Form.File
                                            className="position-relative"
                                            name="file"
                                            label="File"
                                            onChange={handleChange}
                                            feedback={errors.file}
                                            feedbackTooltip
                                        />
                                    </Form.Group>

                                </Row>
                            </Col>

                            <SignupInputCol placeholder="First Name" name="firstName"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                            <SignupInputCol placeholder="Last Name" name="lastName" handleChange={handleChange} values={values} errors={errors} touched={touched} size={4} />
                            <SignupInputCol placeholder="Email" name="email" handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                            <SignupInputCol placeholder="Password" name="password" type="password"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                            <SignupInputCol placeholder="Confirm Password" name="confirmPassword" type="password"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                            <SignupInputCol placeholder="Description" name="description"handleChange={handleChange} values={values} errors={errors} touched={touched} isTextarea={true} size={8}/>

                            <Col md={4} className="signup-input-col d-flex align-items-center justify-content-center w-100">

                                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                    Role
                                </Form.Label>
                                <Form.Control
                                    name="role"
                                    as="select"
                                    value={values.role}
                                    onChange={handleChange}
                                    className="my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                >
                                    <option value="1">Team Lead</option>
                                    <option value="2">Engineer</option>
                                </Form.Control>
                                {errors.role && touched.role ?
                                    <div>
                                        {errors.role}
                                    </div>
                                    :
                                    null
                                }

                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                feedback={errors.terms}
                                feedbackTooltip
                            />
                            {/*{touched.terms && errors.terms ?(*/}
                            {/*    <p className="signup-input-col__error-message text-left my-1"> {errors.terms} </p>*/}
                            {/*    ) : null*/}
                            {/*}*/}
                        </Form.Group>
                        <div className="signup-page-container__signup-row w-100">
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    {/*<Button variant="primary" onClick={()=>signUp(userInfo)}>Sign Up</Button>*/}
                                    <Button variant="primary" type="submit" >Sign Up</Button>
                                </Col>

                                <Col md={4}>
                                    <p className="m-0 pl-0">Already registered? <Link to="/login">Login Here</Link></p>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </form>
            </Container>
        </div>


    )
}

export default SignupPage
