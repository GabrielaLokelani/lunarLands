import React from "react";
import { Formik, Form, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { TextField, Button} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const RegisterScreen = () => {
    return ( 
        <Formik
            initialValues= {{username: '', password: '', rePassword: '', email: '', profilePicture: ''}}
            validationSchema= { Yup.object({
                username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                email: Yup.string().email('Invalid email').required('Required')
            })}
        >
            <div className="register-form">
            <Form>
                <TextField color="secondary" label="Username" variant="filled" margin="normal" name='username' fullWidth />
                    <ErrorMessage name="username"/>
                        <TextField id="filled-basic" label="Password" variant="filled" margin="normal" name='password' fullWidth/>
                            <ErrorMessage name="password"/>
                        <TextField id="filled-basic" label="Re-enter Password" variant="filled" margin="normal" name='rePassword' fullWidth/>
                        <ErrorMessage name="rePassword"/>
                    <TextField id="filled-basic" label="Profile Picture" variant="filled" margin="normal" name='profilePic' fullWidth/>
                <Button variant="contained" color="secondary" startIcon={< PersonAddIcon />} > Register </Button>
            </Form>
            </div>
            </Formik>
         );

}
 
export default RegisterScreen;