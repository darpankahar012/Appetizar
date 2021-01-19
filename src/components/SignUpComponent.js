import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { connect } from 'react-redux'
import { signUserUp } from '../actions/userActions'
import Image from '../../src/b6c766a55337a6549b39933a77560a4a.png'

class SignUpComponent extends React.Component {
    state = {
        name: "",
        password: "",
        email: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    redirectToSingIp = () => {
        const { history } = this.props;
        console.log(history)
        if (history) history.push("/");
    };
    image = { backgroundImage: `url(${Image})`, height: '100vh', padding: 50 }
    paperStyle = { padding: 20, height: 'auto', width: '70vh', margin: "20px auto" }
    typo = { margin: "20px auto" }
    avatarStyle = { backgroundColor: '#1bbd7e' }
    btnstyle = { margin: '12px 0', height: '60px' }
    textfield = { margin: '12px 0' }

    render() {
        return (
            <Grid style={this.image}>
                <Paper elevation={10} style={this.paperStyle} >

                    <div>
                        <Typography variant='h4' color='white' align='justify' style={this.typo} > Welcome Back </Typography>
                        <Typography align='justify' style={this.typo} > sign up to continue </Typography>

                        <TextField label='Name' placeholder='Enter name' type="text"
                            inputProps={{ style: { fontSize: 30 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            name="name"
                            value={this.state.name}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <TextField label='Email' placeholder='Enter email' type="email"
                            inputProps={{ style: { fontSize: 30 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <TextField label='Password' placeholder='Enter password' type='password'
                            inputProps={{ style: { fontSize: 30 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <Button type='submit' color='secondary' variant="contained" onClick={this} style={this.btnstyle} fullWidth>Sign up</Button>
                        <Button type='submit' color='primary' variant="contained" style={this.btnstyle} fullWidth>Connect with Facebook</Button>
                        <Typography align='center' style={this.typo}> Already an account ?
                            <Link onClick={this.redirectToSingIp}
                            >
                                {" Sign in"}
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
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent)