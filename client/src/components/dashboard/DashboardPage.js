import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import { useHistory } from "react-router-dom";
import DataTable from "../shared/DataTable";

const DashboardPage = ({ isAuth, logOut, user , projectData }) => {
    const [filteredData, setFilteredData] = useState(projectData.data)

    const history = useHistory()

    const handleCreateBug = () => {
        // console.log(history)
        history.push('/bug/create')
    }

    function handleButtonFilter(e){
        // console.log("handling")
        // console.log(e.target.name)
        if(e.target.name === "user"){
            const newData = projectData.data.filter( project => project.user._id === user._id )
            setFilteredData(newData)
        }
        if(e.target.name === "all"){
            // const newData = projectData.data.filter( project => project.user._id === user._id )
            setFilteredData(projectData.data)
        }
    }

    useEffect(()=>{
        console.log(filteredData)
    },[])

    // console.log(filteredData)
    // console.log(user)
    console.log(projectData)

    return (

        <Container>
            <button name="user" onClick={ e => handleButtonFilter(e) } >Reported by me</button>
            <button name="all" onClick={ e => handleButtonFilter(e) } >All Bugs</button>

            <h1 className="text-left">Project Title / All Bugs Reported by Me</h1>
            <Row>
                <Col md={10}>
                    <SearchBar />
                </Col>
                <Col md={2} className="d-flex mb-3">
                    <Button onClick={handleCreateBug}>+ Create New</Button>
                </Col>
            </Row>
            {filteredData?
                <DataTable projectData={filteredData} />
                :
                <DataTable projectData={projectData.data} />
            }

        </Container>


    )
}

export default DashboardPage