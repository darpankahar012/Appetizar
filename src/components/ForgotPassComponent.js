import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { connect } from 'react-redux'
import { signUserUp } from '../actions/userActions'
import Image from '../../src/b6c766a55337a6549b39933a77560a4a.png'

class ForgotPassComponent extends React.Component {
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
    btnstyle = { margin: '12px 0', height: '60px' }

    render() {
        return (
            <Grid style={this.image}>
                <Paper elevation={10} style={this.paperStyle}>

                    <div>
                        <Typography variant='h4' color='white' align='justify' style={this.typo} > Forget password </Typography>
                        <Typography align='justify' style={this.typo} > Enter your email address below and we'll send you an email with instruction on how to change your password </Typography>

                        <TextField label='Email' placeholder='Enter email' type="email"
                            inputProps={{ style: { fontSize: 30 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            fullWidth required />
                        <Button type='submit' color='secondary' variant="contained" onClick={this} style={this.btnstyle} fullWidth>Send</Button>
                        <Typography align='center' style={this.typo}  >
                            <Link onClick={this.redirectToSingIp} >
                                {"Back"}
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

export default connect(null, mapDispatchToProps)(ForgotPassComponent)