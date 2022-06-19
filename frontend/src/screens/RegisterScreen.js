import React, { useState } from "react";
import { TextField, Button} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from "axios";


const RegisterScreen = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        userImageUrl: '',
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        const {username, password, userImageUrl} = user
        if (username && password && userImageUrl) {
            axios
            .post('http://localhost:2600/user/register', user)
            .then(res => console.log("post respones to registration", res))
            .catch(err => {
              console.error(err);
            });
        } else {
            alert('invalid username or password');
        }

        e.preventDefault();
    }
    
    return ( 
            <div className="register-form">
                <TextField onChange={handleChange} value={user.username} color="secondary" label="Username" variant="filled" margin="normal" name='username' fullWidth sx={{ input: { color: 'white' } }} /> 
                    <TextField onChange={handleChange} value={user.password} id="filled-basic" color="secondary" label="Password" variant="filled" margin="normal" name='password' fullWidth sx={{ input: { color: 'white' } }} /> 
                        <TextField onChange={handleChange} id="filled-basic" color="secondary" label="Re-enter Password" variant="filled" margin="normal" name='rePassword' fullWidth sx={{ input: { color: 'white' } }} />
                    <TextField onChange={handleChange} value={user.userImageUrl} id="filled-basic" color="secondary" label="Profile Picture" variant="filled" margin="normal" name='userImageUrl' fullWidth sx={{ input: { color: 'white' } }} /> 
                <Button onClick={handleSubmit} type='submit' variant="contained" color="secondary" startIcon={< PersonAddIcon />} >
                     Register 
                </Button>
            </div>
         );
}
 
export default RegisterScreen;


// onChange={(e) => {handleChange(e)}}