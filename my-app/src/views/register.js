import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button} from '@material-ui/core';

const handleRegister = () => {
    alert('Registered')
}

const Register = () => {
    return (
        <>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor='email'>Email:</InputLabel>
                    <Input id='email' type='email'></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='username'>Username:</InputLabel>
                    <Input id='username' type='text'></Input>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password:</InputLabel>
                    <Input id='password' type='password'></Input>
                </FormControl>
            </FormGroup>

            <Button color='primary' onClick={ ()=>handleRegister() }>Login</Button>
        </>
        );
}
 
export default Register;