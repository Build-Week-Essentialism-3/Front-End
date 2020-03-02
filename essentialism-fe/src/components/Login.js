import React from "react";
import { withFormik, Form, Field } from 'formik';

const Login = () => {
    
    return (
        <div className="formDiv">
            <Form>
                <label htmlFor="username">Username: 
                    <Field id="username" type="text" name="username" placeholder="username"></Field>
                </label>
                
            </Form>
           
        </div>
    );
}
const FormikForm = withFormik({

})(Login);
export default FormikForm;