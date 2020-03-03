import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Projects = () => {
    return(
        <div>
            <Form>
                <FormGroup>
                    <Label>Project: 
                        <Input type="text"/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Description:</Label>
                    <Input type="textarea"></Input>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Projects;