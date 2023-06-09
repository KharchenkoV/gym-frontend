import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import BodyPartImage from '../assets/images/body-part.png';
import TargetImage from '../assets/images/target.png';
import EquipmentImage from '../assets/images/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            id: 1,
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            id: 2,
            icon: TargetImage,
            name: target,
        },
        {
            id: 3,
            icon: EquipmentImage,
            name: equipment,
        },
    ];
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Вправи роблять тебе сильнішим.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> одна з найкращих
                     <br /> вправ щоб зміцнити {target}. Це допомопоже тобі повисити {' '}
                    <br /> настрій та покращити самопочуття.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.id} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail