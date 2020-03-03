import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
      });
      const handleChanges = e => {
        //console.log("note: ", user);
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
      };
      const submitForm = e => {
        e.preventDefault();
        setUser({ username: "", password: "" });
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
                    />
                </Label>
                
                <Label htmlFor="password">
                    <Input
                        id="password_reg"
                        type="text" 
                        name="password" 
                        onChange={handleChanges}
                        placeholder="password"
                        value={user.password}
                    />
                </Label>
                <Button type="submit">Register</Button>
                </FormGroup>
            </Form>
           
        </div>
    );
}

export default Register;