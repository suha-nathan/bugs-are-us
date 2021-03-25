import React, {useState} from 'react'
import TempHeader from "../shared/TempHeader";
import {Button, Col, Container, Image, Row, Form} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import SignupInputCol from "./SignupInputCol";
import FileBase from "react-file-base64"
import * as Yup from "yup"
import {useFormik} from "formik"
import axios from "axios";

const SignupPage = ({isAuth,isSignedUp,signUp,setSignedUp, setSuccessMessage}) => {
    const [baseImageUpload, setBaseImageUpload] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)

    function onChange(e){
        setThumbnailImage(URL.createObjectURL(e.target.files[0]))
        setBaseImageUpload(e.target.files[0])
    }

    const signupSchema = Yup.object().shape({
        file: Yup.mixed(),
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your first name"),
        email: Yup.string().email("Invalid Email").required("Please enter your email"),
        password: Yup.string().required("password is required"),
        confirmPassword: Yup.string().when("password",{
            is: val=> (val && val.length>0), //double exclamation casts boolean
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "password doesn't match"
            )
        }),
        role: Yup.string(),
        description:Yup.string(),
        terms: Yup.bool().required().oneOf([true], 'terms must be accepted')
    })

    const { handleChange,errors, handleSubmit, touched, values, setFieldValue } = useFormik({
        initialValues: {
            file:null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",
            role:"2",
            terms:false
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {

            let {  firstName, lastName, email, password, description, role } = values
            let enumRole = role==="1" ? "teamLead" : "user"

            // console.log(baseImage)
            // let tempUserInfo = {
            //     file: baseImage,
            //     firstName,
            //     lastName,
            //     email,
            //     password,
            //     description,
            //     role: enumRole
            // }
            const formData = new FormData()
            formData.append("firstName",firstName)
            formData.append("lastName",lastName)
            formData.append("email",email)
            formData.append("password",password)
            formData.append("description",description)
            formData.append("role",enumRole)
            formData.append("file",baseImageUpload)

            // tempUserInfo.append("firstName",firstName)
            // console.log(tempUserInfo)
            // console.log(formData.get("file"))
            signUp(formData)
            //     .then(()=>{
            //     setSignedUp(true)
            //     setSuccessMessage("Successfully Signed Up! Please Login")
            //     setTimeout(() => {
            //         setSuccessMessage("")
            //     }, 2000)
            // })

        }
    })

    if(isAuth){
        return <Redirect to={"/dashboard"}/>
    }

    function validateConfirmPassword(password, value) {
        let error = ''
        if((password && value) && (password !== value)) {
                error = 'Password not matched'
        }
        return error

    }

    // console.log(baseImage)

    return (
        <div className="signup-page-container">
            <TempHeader />

            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                <h1 className="my-0 ">Bugs R Us</h1>


                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="signup-page-container__content w-100 h-150 d-flex flex-column justify-content-between">
                        <Row className="h-75 ">
                            <Col className="signup-input-col">
                                <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                    {!thumbnailImage ?
                                        <Image src="https://www.placehold.it/80x80" className="rounded-circle"/>
                                        :
                                        <Image src={thumbnailImage} width="80px" height="80px" className="rounded-circle"/>
                                    }

                                    <Form.Group>
                                        <Form.File
                                            className="position-relative"
                                            name="file"
                                            label="File"
                                            onChange={ e => onChange(e) }
                                            feedback={errors.file}
                                            feedbackTooltip
                                        />
                                    </Form.Group>
                                    {/*<ImageUpload/>*/}

                                    {/*<Image*/}
                                    {/*    src={baseImage}*/}
                                    {/*    alt="upload-image"*/}
                                    {/*    width="100"*/}
                                    {/*    height="100"*/}
                                    {/*    className="rounded-circle"/>*/}

                                    {/*<Form.Group>*/}
                                    {/*    <FileBase*/}
                                    {/*        type="file"*/}
                                    {/*        multiple={false}*/}
                                    {/*        onDone={e=>{ getBaseFile(e) }}*/}
                                    {/*    />*/}
                                    {/*</Form.Group>*/}

                                </Row>
                            </Col>

                            <SignupInputCol
                                placeholder="First Name"
                                name="firstName"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Last Name"
                                name="lastName"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4} />

                            <SignupInputCol
                                placeholder="Email"
                                name="email"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Password"
                                name="password"
                                type="password"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                size={4}/>

                            <SignupInputCol
                                placeholder="Description"
                                name="description"
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                touched={touched}
                                isTextarea={true}
                                size={8}/>

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
                                type="checkbox"
                                required
                                name="terms"
                                label="I agree to terms and conditions"
                                onChange={handleChange}
                                feedback={errors.terms}
                                feedbackTooltip
                                id="inlineFormCheck"
                            />
                        </Form.Group>
                        <div className="signup-page-container__signup-row w-100">
                            <Row>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Button variant="primary" type="submit" >Sign Up</Button>
                                </Col>

                                <Col md={4}>
                                    <p className="m-0 pl-0">Already registered? <Link to="/login">Login Here</Link></p>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </Form>
            </Container>
        </div>


    )
}

export default SignupPage
