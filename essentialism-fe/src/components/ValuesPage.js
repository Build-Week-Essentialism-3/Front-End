import React from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";
const ValuesPage = () => {
  
    return (
        <div className="valuesDiv">
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"/> Athletic Ability
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
               


            </Form>
        </div>
    )
}

export default ValuesPage;