import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { connect } from 'react-redux'
import Image from '../../src/b6c766a55337a6549b39933a77560a4a.png'
import { fetchUser, logout } from '../actions/userActions'

class LoginComponent extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.fetchUser(this.state)
        const { history } = this.props;
        if (history) history.push("/verify-otp");
    }

    redirectToSingUp = () => {
        const { history } = this.props;
        if (history) history.push("/signup");
    };

    redirectToForgetPass = () => {
        const { history } = this.props;
        console.log(history)
        if (history) history.push("/forgot-password");
    };


    image = { backgroundImage: `url(${Image})`, height: '100vh', padding: 50 }
    paperStyle = { padding: 20, height: 'auto', width: '70vh', margin: "20px auto" }
    typo = { margin: "20px auto" }
    avatarStyle = { backgroundColor: '#1bbd7e' }
    btnstyle = { margin: '12px 0', height: '60px' }
    textfield = { margin: '12px 0'}


    render() {

        return (
            <Grid style={this.image}>
                <Paper elevation={20} style={this.paperStyle}>

                    <div>
                        <Typography variant='h4' color='white' align='justify' style={this.typo} > Welcome Back </Typography>
                        <Typography align='justify' style={this.typo} > sign in to continue </Typography>

                        <TextField style={this.textfield}
                            label='Email'
                            placeholder='Enter email'
                            type="email"
                            inputProps={{ style: { fontSize: 30 } }} 
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <TextField size='medium'
                            label='Password'
                            placeholder='Enter password'
                            type='password'
                            inputProps={{ style: { fontSize: 30 } }} 
                            InputLabelProps={{ style: { fontSize: 20 } }} 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <Button type='submit' color='secondary' variant="contained" onClick={this.onSubmit} style={this.btnstyle} fullWidth>Sign in</Button>
                        <Button type='submit' color='primary' variant="contained" style={this.btnstyle} fullWidth>Connect with Facebook</Button>
                        <Typography align='center' style={this.typo} >
                            <Link onClick={this.redirectToForgetPass} >
                                Forgot password ?
                                </Link>
                        </Typography>
                        <Typography align='center' style={this.typo}  > Don't have an account ?
                            <Link onClick={this.redirectToSingUp} >
                                {" Sign Up"}
                            </Link>
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)