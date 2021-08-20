import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input} from '@material-ui/core';

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
                <FormControl>
                    <Input id='submit' type='submit'>Login</Input>
                </FormControl>
            </FormGroup>
        </>
    )
}

export default Login 