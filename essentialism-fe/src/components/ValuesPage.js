import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {axiosWithAuth} from '../store/axiosWithAuth';
import {connect} from 'react-redux';
import {addUserValue} from '../store/actionIndex';

const ValuesPage = () => {

    const [values, setValues] = useState([]);
     const [newValue, setNewValue] = useState("");
    
    useEffect(() => {
        axiosWithAuth()
        .get("/values/")
          .then(response => {
            console.log("response.data: ", response.data);
            setValues(response.data);
          })
          .catch(error =>{
            console.log("Data was not returned,", error.message)
          })
  },[])
//   const addNewValue = (valueName) =>{
//       axiosWithAuth()
//         .post("/values/", {name: valueName})
//         .then(response => {
//             setValues([...values, response.data])
//             setNewValue("")
//         })
//   }
    return (
        <div className="valuesDiv">
            <Form>
                <FormGroup>
                {values.map(v =>{
                    return(
                        <Label key={v.id}>
                            <Button>{v.name}</Button>
                        </Label>
                    ) 
                })}
            <Form>
            <Input type="textarea" placeholder="other: " value={newValue}/>
            <Button >Custom Value</Button>

            </Form>
            <Button>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
   
}

export default ValuesPage;

