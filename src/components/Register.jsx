import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Avatar,
    Box, Button,
    Container,
    Grid,
    TextField,
    Typography
} from "@mui/material";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PWD_REGEX = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{7,16}$/
const NAME_REGEX = /^.{2,16}$/
const Register = () => {
    const errorRef = useRef()

    const [firstname, setFirstname] = useState('')
    const [validFirstname, setValidFirstname] = useState(false)

    const [lastname, setLastname] = useState('')
    const [validLastname, setValidLastname] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidFirstname(NAME_REGEX.test(firstname))
    }, [firstname])

    useEffect(() => {
        setValidLastname(NAME_REGEX.test(lastname))
    }, [lastname])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd, matchPwd])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Реєстрація
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            label="Ім'я"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            label="Прізвище"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            label="Пошта"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={pwd}
                                            onChange={(e) => setPwd(e.target.value)}
                                            label="Пароль"
                                            type="password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            value={matchPwd}
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            label="Пароль"
                                            type="password"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled={!validEmail || !validPwd || !validMatch || !validFirstname || !validLastname}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Реєстрація
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link variant="body2" to={'/'}>
                                            Вже є акаунт? Увійти
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </section>
            )}
        </>
    );
};

export default Register;