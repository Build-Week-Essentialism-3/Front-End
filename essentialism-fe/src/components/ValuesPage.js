import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {axiosWithAuth} from '../store/axiosWithAuth';
import {connect} from 'react-redux';
import {addUserValue} from '../store/actionIndex';

const ValuesPage = () => {

    const [values, setValuesData] = useState([]);
     const [newValue, setNewValue] = useState("");
    let valueList = [];


    const newData = {
        name: newValue
    };
    const toggle = e => {
        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
        } else {
            e.target.classList.add('selected');
        };
    };

    const selectValue = e => {
        e.preventDefault();

        
        if (e.target.classList.contains('selected')) {
            // If the classlist of the button includes 'selected', removes the value from the valueList and toggles the 'selected' class off.
            for (let i = 0; i < valueList.length; i++) {
                if (valueList[i].value_id === e.target.value) {
                    valueList.splice(i, 1);
                }
            }
            toggle(e);    
        } else {
            // if the classlist of the button does not inclued 'selected', adds the value to valueList and toggles the 'selected' class on.
            valueList.push({ user_id: userId, value_id: parseInt(e.target.value, 10) })
            toggle(e)
            console.log('ValueList: ', valueList);
        };
    };
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

      })
      //console.log("valueList", valueList);

   
    return (
        <div className="valuesDiv">
            <Form>

            <FormGroup>
            {values.map(v =>{
                return(
                    <Label>
                        <Button key={v.id}> {v.name} onClick={selectValue}</Button>
                    </Label>
                ) 
            })}
            <Form>


                <Input type="textarea" placeholder="other: " value={newData.name}></Input>
                <Button>Custom Value</Button>

            </Form>
            <Button>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
   
}

export default ValuesPage;

