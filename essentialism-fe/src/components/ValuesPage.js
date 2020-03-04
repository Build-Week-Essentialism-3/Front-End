import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {axiosWithAuth} from '../store/axiosWithAuth';
import {connect} from 'react-redux';
import {addUserValue} from '../store/actionIndex';

const ValuesPage = () => {

    const [values, setValuesData] = useState([]);
    const [newValue, setNewValues] = useState("");
    

    console.log(values,'values state');
    
    
    const newData = {
        name: newValue
    }
    useEffect(() => {
        axiosWithAuth()
        .get("/values/")
          .then(response => {


            console.log("response.data: ", response.data);
            setValuesData(response.data);

          })
          .catch(error =>{
            console.log("Data was not returned,", error.message)
          })
      },[])
    const handleClick = () =>{
        //e.preventDefault();
        //console.log("e.target.value: ", e.target.value);
  
            
       
 
    }

    // const handleSubmitUserValues = () => {
    //     valuesList.map(val => (

    //     ))
    // }
    return (
        <div className="valuesDiv">
            <Form >
            <FormGroup>
            {values.map(v =>{
                return(
                    <Label>
                        <Button key={v.id} onClick={handleClick}>{v.name}</Button>
                    </Label>
                ) 
            })}
            <Form>
                <Input type="textarea" placeholder="other: "></Input>
                <Button >Custom Value</Button>
            </Form>
            <Button>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
   
}

export default ValuesPage;

