# Dynamic_Sign_Up_Form_React

import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';




const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: 'blue' };
    const marginTop = { margin: 5 };


    return (
        <Grid>
            <Paper elavation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>

                    <form>
                        <TextField fullWidth label='Name' placeholder='Enter your Name' />
                        <TextField fullWidth label='Email' placeholder='Enter your Email' />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='Phone Number' placeholder='Enter your Phone Number' />
                        <TextField fullWidth label='Password' placeholder='Enter your Password' />
                        <TextField fullWidth label='Confirm Password' placeholder='Confirm your Passoword' />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the term and conditions!"
                        />
                        <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                    </form>
                </Grid>

            </Paper>
        </Grid>
    );
}

export default Signup;
