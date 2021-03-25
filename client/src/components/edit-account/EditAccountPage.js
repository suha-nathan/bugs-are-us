import React, {useState} from 'react'
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import EditAccountInputCol from "./EditAccountInputCol";
import * as Yup from "yup"
import {useFormik} from "formik"
import axios from "axios";


const EditAccountPage = ({user}) => {
    const [isEdited, setEdited] = useState(false)
    const [profilePicture, setProfilePicture] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)

    function onChange(e){
        setThumbnailImage(URL.createObjectURL(e.target.files[0]))
        setProfilePicture(e.target.files[0])
    }

    const editAccountSchema = Yup.object().shape({
        // file: Yup.mixed(),
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string(),
        password: Yup.string(),
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
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: "",
            confirmPassword: "",
            description: user.description,

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

            // const formData = new FormData()
            //
            // formData.append("firstName", firstName)
            // formData.append("lastName", lastName)
            // formData.append("email", email)
            // formData.append("password", password)
            // formData.append("description", description)
            // formData.append("file", profilePicture)
            //
            // handleEdit(formData)
            // console.log("submitting")

            // console.log(tempUserInfo)

            handleEdit(tempUserInfo)
        }
    })

    async function handleEdit(updatedInfo){
        try{

            const token = localStorage.getItem("token")
            let res = await axios.put("http://localhost:8080/user/update", updatedInfo,{
                headers: {
                    // "content-type": "multipart/form-data",
                    "x-auth-token": `Bearer ${token}`
                }
            }
            )
            console.log("editing")

        }catch(e){
            console.log("error editing")
        }
    }

    if(isEdited){
        // console.log("Redirecting")
        return <Redirect to={"/"}/>
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
            <h1 className="my-0 ">Edit Account</h1>

            <form onSubmit={handleSubmit}>

            <div className="signup-page-container__content w-100 h-150 d-flex flex-column justify-content-between">
                <Row className="h-75 ">

                    <Col className="signup-input-col">
                        <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                            <Image
                                src={user?.profilePicture}
                                className="profile-pic profile-pic-sm "
                                style={{width: "7rem", height: "7rem", borderRadius: "3.5rem"}}/>

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
                        </Row>
                    </Col>

                    <EditAccountInputCol
                        placeholder="First Name"
                        name="firstName"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        size={4}/>

                    <EditAccountInputCol
                        placeholder="Last Name"
                        name="lastName"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        size={4} />

                    <EditAccountInputCol
                        placeholder="Email"
                        name="email"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        user={user}
                        size={4}/>

                    <EditAccountInputCol
                        placeholder="Password"
                        name="password"
                        type="password"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        size={4}/>

                    <EditAccountInputCol
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        size={4}/>

                    <EditAccountInputCol
                        placeholder="Write a short description of yourself here"
                        name="description"
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                        isTextarea={true}
                        size={8}/>

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

    )
}

export default EditAccountPage
