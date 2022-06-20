import React, { useState } from "react";
import { TextField, Button} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const LoginScreen = ({setLoggedIn}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:2600/user/login', user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            sameSite: 'none'
        }).then(res => {console.log(res.data.user)
            setLoggedIn(res.data.user)
            navigate('/')
        })
        e.preventDefault();
    }

    return ( 
        <div>
            <TextField onChange={handleChange} value={user.username} color="secondary" label="Username" variant="filled" margin="normal" name='username' fullWidth />
            <TextField  onChange={handleChange} value={user.password} color="secondary" label="Password" variant="filled" margin="normal" name='password' fullWidth/>
            <Button onClick={handleSubmit} type='submit' variant="contained" color="secondary" startIcon={< AccountBoxIcon />} > Login </Button>
        </div>
    );
}

export default LoginScreen;