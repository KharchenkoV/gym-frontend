import React from 'react';
import {Box, Container, Typography, Link, Grid} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{mt: 15}}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Про нас
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ми спортивний зал, що надає місце для тренувань обладнане тренажерами
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Наші контакти
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            вул. Волинська 24, Рівне, Україна
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Пошта: kharchenko_ak19@nuwm.edu.ua
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Телефон: +38 097 507 xx xx
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Спідкуй за соцмережами
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit">
                            GymApp
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;