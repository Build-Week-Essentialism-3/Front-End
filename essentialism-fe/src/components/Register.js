import React, {useState} from "react";
import {registerFunc} from '../store/actionIndex';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from "react-redux";

const Register = (props) => {
    
    const [user, setUser] = useState({
        username: "",
        password: ""
      });
      console.log(props, 'props from register');
      const handleChanges = e => {
        //console.log("note: ", user);
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
      };
      const submitForm = e => {
        e.preventDefault();
        props.registerFunc(user,props.history);
        
      };
    return (
        <div className="formDiv">
            <Form onSubmit={submitForm}>
                <FormGroup>
                <Label htmlFor="username">
                    <Input 
                        id="username_reg"
                        type="text" 
                        name="username" 
                        onChange={handleChanges}
                        placeholder="username"
                        value={user.username}
                        required="required"
                        minlength="6" maxlength="10"
                    />
                </Label>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">
                    <Input
                        id="password_reg"
                        type="text" 
                        name="password" 
                        onChange={handleChanges}
                        placeholder="password"
                        value={user.password}
                        required="required"
                        minlength="6" maxlength="10"
                    />
                </Label>
                </FormGroup>
                
                <Button type="submit">Register</Button>
            </Form>
           
        </div>
    );
}
const mapStateToProps = state => {
    return {
        isFetching:state.isFetching,
        currentUser:state.currentUser
    }
}
export default connect(mapStateToProps, {registerFunc}) (Register);