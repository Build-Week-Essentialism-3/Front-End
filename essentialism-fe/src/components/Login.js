import React, {useState} from "react";
import {connect} from 'react-redux';
import {loginFunc} from '../store/actionIndex';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';





const Login = (props) => {

    // console.log(props,'these are props');
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
        props.loginFunc(user,props.history)
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
                        required="required"
                        minlength="6" maxlength="10"
                    />
                </Label>
                
                <Label htmlFor="password">
                    <Input
                        id="password"
                        type="password" 
                        name="password" 
                        onChange={handleChanges}
                        placeholder="password"
                        value={user.password}
                        required="required"
                        minlength="6" maxlength="10"
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