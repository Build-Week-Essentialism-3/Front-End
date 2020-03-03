import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Projects = () => {
    const [project, setProject] = useState({
        projectName: "",
        description: ""
    });
    const handleprojectChange = event => {
        //console.log("project event: " + event.target.value)
        setProject({ ...project, projectName: event.target.value });
      };

      const handleDescriptionChange = event => {
         //console.log("descriptiong event: " + event.target.value)
        setProject({ ...project, description: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        //console.log("project: " + project.projectName);
        //console.log("description: " + project.description);
      };
    return(
        <div>
            <Form onSubmit={event => handleSubmit(event)}>
                <FormGroup>
                    <Label>Project: 
                        <Input type="text" onChange={event => handleprojectChange(event)}/>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Description:</Label>
                    <Input type="textarea" onChange={event => handleDescriptionChange(event)}></Input>
                    <Button type="submit">Add Project</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Projects;