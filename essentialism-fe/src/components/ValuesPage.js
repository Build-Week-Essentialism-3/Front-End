import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {axiosWithAuth} from "../store/axiosWithAuth";

const ValuesPage = () => {

    const [values, setValuesData] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get("/values/")
          .then(response => {
            console.log("response.data: ", response.data);
            setValuesData(response.data);
          })
          .catch(error =>{
            console.log("Data was not returned,", error)
          })
      },[])
      console.log("values", values);
    return (
        <div className="valuesDiv">
            
            {values.map(v =>{
                return(
                    <Form>
                        <FormGroup>
                            <Label>
                                <Button key={v.id}>{v.name}</Button>
                            </Label>
                        </FormGroup>
                    </Form>
                ) 
            })}
        </div>
    )
   
}

export default ValuesPage;

