import React from 'react'
import {Form, Button, InputGroup, Container} from "react-bootstrap";

const SearchBar = (props) => {

    return (
        <Container>
            <InputGroup>
                <Form.Control />
                <InputGroup.Append>
                    <Button>Search</Button>
                </InputGroup.Append>

            </InputGroup>

        </Container>
    )
}

export default SearchBar