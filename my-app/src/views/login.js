import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, Breadcrumbs, Link} from '@material-ui/core';

const handleLogin = () => {
    alert('Login!')
}

const Login = () => {
    return (
        <>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor='username'>Username:</InputLabel>
                    <Input id='username' type='text'></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password:</InputLabel>
                    <Input id='password' type='password'></Input>
                </FormControl>
            </FormGroup>

            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/forgot">
                    Forgot password
                </Link>
                <Link color="inherit" href="/register">
                    Register
                </Link>
            </Breadcrumbs>

            <Button color='primary' onClick={ ()=>handleLogin() }>Login</Button>
        </>
    )
}

export default Login 