import React, { useState } from 'react'
import './LoginBody.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';

function LoginBody() {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({ email: "", password: '' })
    const [errorMsg, setErrorMsg] = useState(false)
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        if (loginData.email && loginData.password && !errorMsg) {
            navigate('/dashboard')
        } else {
            setErrorMsg(true)
        }
    }
    const handleBlur = () => {
        if (loginData.email && loginData.password) {
            setErrorMsg(false)
        }
    }
    return (
        <div >
            <div className='login-body'>
                <h2>Login</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        placeholder='Enter Email'
                        autoComplete="current-email"
                        name='email'
                        onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type={checked ? "text" : "password"}
                        name='password'
                        placeholder='Enter Password'
                        autoComplete="current-password"
                        onChange={(e) => handleInputChange(e)}
                        onBlur={handleBlur}
                    />
                </Box>
                <div className='checkBox'>
                <FormControlLabel control={<Checkbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="Show Password" />
                </div>
                {/* <Checkbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                /> */}
                <div>

                    {errorMsg && <p className='error-message'>Enter Valid Login Details</p>}
                </div>
                <button className='loginButton' onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default LoginBody