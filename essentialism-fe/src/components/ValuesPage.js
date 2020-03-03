import React, {useState} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
const ValuesPage = () => {
    const [values, setValues] = useState({
        value_id: 0, 
        name: ""
      });
      
    const handleIdChanges = event => {
        setValues({...values, value_id: event.target.value})    
    }
    const handleNameChanges = event => {
        setValues({...values, name: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault();
        //console.log("project: " + project.projectName);
        //console.log("description: " + project.description);
    };
    return (
        <div className="valuesDiv">
            <Form onSubmit={event => handleSubmit(event)}>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" onChange={event => handleIdChanges(event)} onChange={event => handleNameChanges(event)} /> Athletic Ability
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Art and literature
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Creativity, discovering, or inventing things to make a difference in the world
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Independence
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Kindness and generosity
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Living in the moment
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Membership in a social group (such as your community, racial group, or school club)
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Music
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> My community
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> My moral principles
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Nature and the environment
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Relationships with friends and family
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Sense of humor
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Success in my career
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Other:
                    </Label>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default ValuesPage;