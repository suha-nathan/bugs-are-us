import React, {useState} from 'react'
import TempHeader from "../shared/TempHeader";
import {Button, Col, Container, Dropdown, Form, Image, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import EditAccountInputCol from "./EditAccountInputCol";
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import * as Yup from "yup"
import {useFormik} from "formik"
import axios from "axios";
import SignupInputCol from "../signup/SignupInputCol";



const EditAccountPage = ({user}) => {
    const [userInfo, setUserInfo] = useState({})
    const [isEdited, setEdited] = useState(false)

    const editAccountSchema = Yup.object().shape({
        // file: Yup.mixed(),
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
        // role: Yup.string(),
        description:Yup.string(),
    })

    const { handleChange,errors, handleSubmit, touched, values } = useFormik({
        initialValues: {
            // file:null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",

        },
        validationSchema: editAccountSchema,
        onSubmit: (values,{resetForm}) => {

            let { firstName, lastName, email, password, description } = values

            let tempUserInfo = {
                firstName,
                lastName,
                email,
                password,
                description,
            }
            handleEdit(tempUserInfo)
        }
    })

    async function handleEdit(updatedInfo){
        try{
            const token = localStorage.getItem("token")
            let res = await axios.put("http://localhost:8080/user/update", updatedInfo,{
                headers: {
                    "x-auth-token": `Bearer ${token}`
                }
            })

        }catch(e){
            console.log("error editing")
        }
    }

    if(isEdited){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            <Header user={user} />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>

                <Col>

                    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
                        <h1 className="my-0 ">Edit Account</h1>

                        <form onSubmit={handleSubmit}>

                        <div className="signup-page-container__content w-100 h-150 d-flex flex-column justify-content-between">
                            <Row className="h-75 ">

                                <Col className="signup-input-col">
                                    <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                        <Image src="https://www.placehold.it/90x90" className="rounded-circle"></Image>
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

                                <EditAccountInputCol placeholder={user.firstName}  name="firstName" handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                                <EditAccountInputCol placeholder={user.lastName}  name="lastName"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4} />
                                <EditAccountInputCol placeholder={user.email} name="email"  handleChange={handleChange} values={values} errors={errors} touched={touched} user={user} size={4}/>
                                <EditAccountInputCol placeholder="Password" name="password" type="password"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                                <EditAccountInputCol placeholder="Confirm Password" name="confirmPassword" type="password"  handleChange={handleChange} values={values} errors={errors} touched={touched} size={4}/>
                                <EditAccountInputCol placeholder={user.description} name="description"  handleChange={handleChange} values={values} errors={errors} touched={touched} isTextarea={true} size={8}/>

                                {/*<Col md={4} className="signup-input-col d-flex align-items-center justify-content-center w-100">*/}
                                {/*    <Dropdown>*/}
                                {/*        <Dropdown.Toggle variant="primary" id="dropdown-basic">*/}
                                {/*            Roles*/}
                                {/*        </Dropdown.Toggle>*/}
                                {/*        <Dropdown.Menu show >*/}

                                {/*            <Dropdown.Item>Users/Engineers</Dropdown.Item>*/}
                                {/*            <Dropdown.Item>Team Leader</Dropdown.Item>*/}
                                {/*        </Dropdown.Menu>*/}
                                {/*    </Dropdown>*/}

                                {/*</Col>*/}
                            </Row>
                            <div className="signup-page-container__signup-row w-100">
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }}>
                                        <Button variant="primary" type="submit">Save Changes</Button>
                                    </Col>


                                </Row>

                            </div>
                        </div>
                        </form>

                    </Container>
                </Col>
            </Row>



        </div>
    )
}

export default EditAccountPage
