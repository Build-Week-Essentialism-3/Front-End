import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {axiosWithAuth} from '../store/axiosWithAuth';
import {connect} from 'react-redux';
import {addUserValue} from '../store/actionIndex';
import {addNewValue} from '../store/actionIndex';


const ValuesPage = (props) => {
    console.log(props,'props')

    const userId = JSON.parse(localStorage.getItem('userID'))


    const [values, setValuesData] = useState([]);
    const [newValue, setNewValue] = useState([{name:''}]);
    const [valueList, setValueList] = useState([]);
    

    const handleNewData = e => {
        setNewValue({...newValue, [e.target.name]:e.target.value});
        console.log(e.target.value);
    };



    // const newData = {
    //     name: newValue
    // };

    
    const toggle = e => {
        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
        } else {
            e.target.classList.add('selected');
        };
    };

    const selectValue = e => {
        e.preventDefault();
        
                const updatedList = values.filter(item => {
                return Number(e.target.value) !== item.id
            }) 
            console.log(updatedList)
             setValuesData(updatedList);
                console.log(e.target.value)
        
           
            
            setValueList([
                ...valueList,
                { user_id: userId, value_id: Number(e.target.value) }
            ])

            toggle(e)
            
        
    };
    
    console.log('ValueList: ', valueList);


    useEffect(() => {
        axiosWithAuth()
        .get("/values/")
          .then(response => {



            console.log("value get response.data: ", response.data);
            setValuesData(response.data);


          })
          .catch(error =>{
            console.log("Data was not returned,", error.message)
          })
  },[])

   

const addUserV = e => {
    e.preventDefault();
    valueList.map(val => {
        props.addUserValue(val, val.user_id)
        console.log(props.values,'props values')
    })
    
}

const addNewValue = e => {
    e.preventDefault();
    props.addNewValue(newValue);
}

 
      

   
    return (
        <div className="valuesDiv">
            <Form onSubmit={addUserV}>
            <FormGroup>
            {values.map(v =>{
                return(
                    <Label>
                        <Button color="warning" onClick={selectValue} key={v.id} value={v.id}>{v.name}</Button>
                    </Label>
                ) 
            })}
            <Button color="primary" className='btn-sub-addValue' type='submit'>Submit</Button>
            <Form>

                <Input type="textarea" placeholder="other: " 
                    value={newData.name}
                    onChange={handleNewData}>
                </Input>
                <Button color="primary" onClick={addNewValue}>Add Custom Value</Button>



                <Input type="textarea" placeholder="other: "
                name='newValue' 
                value={newValue.name}
                 onChange={handleNewData}>

                 </Input>

                <Button onClick={addNewValue}>Add Custom Value</Button>



            </Form>
            </FormGroup>
            </Form>
        </div>
    )
   
}

const mapStatetoProps = state => {
    return {
        isFetching:state.isFetching,
        values:state.values
    }
}

export default connect(mapStatetoProps,{addNewValue, addUserValue})(ValuesPage);

