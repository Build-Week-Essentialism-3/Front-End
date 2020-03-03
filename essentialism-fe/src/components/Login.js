import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from "axios";

const Login = () => {
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
        axios.post('https://essentialism3.herokuapp.com/api/auth/login',user)
            .then (res => {
            console.log(res)
        })
        //setUser({ username: "", password: "" });

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

export default Login;