import React from "react";
import { Formik, Form, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import {TextField} from '@mui/material'


const RegisterScreen = () => {
    return ( 
        <Formik
            initialValues= {{username: '', password: '', rePassword: '', email: '', profilePicture: ''}}
            validationSchema= { Yup.object({
                username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                email: Yup.string().email('Invalid email').required('Required')
            })}
            onSubmit= {(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false)
                }, 400)
            }}
        >
            <div className="register-form">
            <Form>
            <TextField id="filled-basic" label="Username" variant="filled" name='username'/>
            <ErrorMessage name="username"/>
            <TextField id="filled-basic" label="Password" variant="filled" name='password'/>
            <ErrorMessage name="password"/>
            <TextField id="filled-basic" label="Re-Password" variant="filled" />
            <button type='submit' style={{backgroundColor: 'pink', fontFamily: 'Shadows Into Light, cursive', borderRadius: '5px'}}>submit that !@$#</button>
            </Form>
            </div>
            </Formik>
         );

}
 
export default RegisterScreen;