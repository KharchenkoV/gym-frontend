import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    Typography
} from "@mui/material";
import TariffService from "../services/tariff.service";


const Tariffs = () => {
    const [tariffs, setTariffs] = useState()
    useEffect(() => {
        const fetchTariffsData = async () => {
            let tariffData = await TariffService.getTariffs()
            console.log(tariffData)
            setTariffs(tariffData)
        };

        fetchTariffsData()
    }, []);
    return (
        <>
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Тарифи
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    На даній сторінці зібранні доступні абонементи в спортзалі, які підійдуть
                    для людей, які впевненні в тому, що зможуть тривалмй час його відвідувати,
                    а також і новачків, які хочуть лише спробувати
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tariffs?.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card style={{height: '50vh', position: 'relative'}}>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            &#8372;{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            {`/${tier.months} ${+tier.months === 1 ? 'місяць' : 'місяці'}`}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        {tier.description}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{position: "absolute", bottom: 0, left: 0, right: 0}}>
                                    <Button fullWidth style={{background: '#FF2625'}} variant='contained'>
                                        Придбати
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Tariffs;