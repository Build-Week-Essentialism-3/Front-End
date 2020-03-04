import React, {useState} from "react";
//import axios from 'axios';
import {Form, FormGroup, Label, Button} from "reactstrap";
const ValuesPage = () => {
    const [values, setValues] = useState({
        value_id: 0, 
        name: ""
      });
      const handleNameChange = event => {
          console.log("name event: " + event.target.value)
          setValues({...values, name: event.target.value})
      }
    
    return (
        <div className="valuesDiv">
            <Form >
                <FormGroup>
                    <Label>
                        <Button color="info">Athletics</Button> 
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <Button color="info"> Art and literature</Button>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <Button color="info"> Creativity, discovering, or inventing things to make a difference in the world</Button>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <Button color="info"> Independence</Button>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label >
                        <Button color="info"> Kindness and generosity</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Living in the moment</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Membership in a social group (such as your community, racial group, or school club)</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Music</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button  color="info"> My community</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> My moral principles</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Nature and the environment</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Relationships with friends and family</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Sense of humor</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Success in my career</Button>
                    </Label>
                </FormGroup>
                <FormGroup >
                    <Label >
                        <Button color="info"> Other:</Button>
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default ValuesPage;