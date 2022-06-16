import React from "react";
import { TextField, Button} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const LoginScreen = () => {
    return ( 
        <div>
             <TextField color="secondary" label="Username" variant="filled" margin="normal" name='username' fullWidth />
             <TextField color="secondary" label="Password" variant="filled" margin="normal" name='password' fullWidth/>
             <Button variant="contained" color="secondary" startIcon={< AccountBoxIcon />} > Login </Button>
        </div>
     );
}
 
export default LoginScreen;