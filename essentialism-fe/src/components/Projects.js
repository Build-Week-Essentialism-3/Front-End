import React, {useState} from "react";
import {connect} from 'react-redux';
import {addProj} from '../store/actionIndex';
import "../App.css";

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Projects = (props) => {
    
    const [project, setProject] = useState({
        user_id:'',
        project: "",
        description: ""
    });
    console.log(props,'project');
    const handleprojectChange = event => {
        //console.log("project event: " + event.target.value)
        setProject({ ...project, project: event.target.value });
      };

      const handleDescriptionChange = event => {
         //console.log("descriptiong event: " + event.target.value)
        setProject({ ...project, description: event.target.value });
      };

      


      const handleSubmit = event => {
          const currentUserID = JSON.parse(localStorage.getItem('userID'));
        event.preventDefault();
        const projWithID = {...project, user_id:currentUserID}
        //console.log("project: " + project.projectName);
        //console.log("description: " + project.description);
        setProject(projWithID);
        props.addProj(projWithID);
        console.log(project,'proj after sub');
        console.log(localStorage.getItem('userID'))
      
      };
    return(
        <div id="projectDivBox">
            <Form onSubmit={event => handleSubmit(event)}>
                <FormGroup>
                    <Label>Project: 
                        <Input type="text" onChange={event => handleprojectChange(event)}/>
                    </Label>
                </FormGroup>
                
                <FormGroup>
                    <Label>Description:</Label>
                    <Input id="projectTextArea" type="textarea" onChange={event => handleDescriptionChange(event)}></Input>
                    <Button type="submit">Add Project</Button>
                </FormGroup>
                
                
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects:state.projects,
        currentUser:state.currentUser
    }
}

export default connect(mapStateToProps,{addProj}) (Projects);