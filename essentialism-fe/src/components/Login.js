import React, {useState} from "react";
import {connect} from 'react-redux';
import {loginFunc} from '../store/actionIndex';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Login = (props) => {

    console.log(props,'these are props');
    const [user, setUser] = useState({
        username: "",
        password: ""
      });


      const handleChanges = e => {
        console.log("e.target.value: ", e.target.value);
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
      };
      const submitForm = e => {
        e.preventDefault();
        props.loginFunc(user)
         };


    return (
        <div className="formDiv">
            <Form onSubmit={submitForm}>
                <FormGroup>
                <Label htmlFor="username">
                    <Input 
                        id="username"
                        type="text" 
                        name="username" 
                        onChange={handleChanges}
                        placeholder="username"
                        value={user.username}
                    />
                </Label>
                
                <Label htmlFor="password">
                    <Input
                        id="password"
                        type="text" 
                        name="password" 
                        onChange={handleChanges}
                        placeholder="password"
                        value={user.password}
                    />
                </Label>
                <Button type="submit">Login</Button>
                </FormGroup>
            </Form>
           
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isFetching:state.isFetching
    }
}

export default connect(mapStateToProps,{loginFunc}) (Login);