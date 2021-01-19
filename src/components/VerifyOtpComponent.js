import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Button, Typography, Link } from '@material-ui/core'
import Image from '../../src/b6c766a55337a6549b39933a77560a4a.png'

const VerifyOtpComponent = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const history = useHistory();

    function ProfileForm() {
        history.push('/');
    }

    const image = { backgroundImage: `url(${Image})`, height: '100vh', padding: 50 }
    const paperStyle = { padding: 20, height: 'auto', width: '70vh', margin: "20px auto" }
    const typo = { margin: "20px auto" }
    const btnstyle = { margin: '12px 0', height: '60px' }

    return (
        <>
            <Grid style={image}>

                <Paper elevation={10} style={paperStyle} >
                    <Typography variant='h4' color='white' align='justify' style={typo} >Verify your phone number</Typography>
                    <Typography align='justify' style={typo} > Enter your OTP code here </Typography>
                    <Grid align='center'>

                        {otp.map((data, index) => {
                            return (
                                <input
                                    style={{ margin: 10, textAlign: 'center', height: 30 }}
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}

                        <Typography variant='h4' color='white' align='center' style={typo} >OTP Entered - {otp.join("")}</Typography>
                        <Button
                            style={btnstyle}
                            type='submit'
                            color='secondary'
                            variant="contained"
                            onClick={e => setOtp([...otp.map(v => "")])}
                            fullWidth
                        >
                            Clear
                        </Button>
                        <Button
                            style={btnstyle}
                            type='submit'
                            color='primary'
                            variant="contained"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                            fullWidth
                        >
                            Verify Now
                        </Button>
                        <Typography align='center' style={typo}>
                            <Link onClick={ProfileForm}
                            >
                                {"Back"}
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default VerifyOtpComponent;