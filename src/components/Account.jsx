import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from '@mui/material';

const Account = () => {
    return (
        <Container>

            <MDBContainer>
                <MDBRow className="justify-content-center">
                    <MDBCol md="9" lg="7" xl="5" className="mt-5">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex text-black">
                                    <div className="flex-shrink-0">
                                        <MDBCardImage
                                            style={{ width: '180px', borderRadius: '10px' }}
                                            src='https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1'
                                            alt='Generic placeholder image'
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <MDBCardTitle>Харченко Володимир</MDBCardTitle>
                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                            style={{ backgroundColor: '#efefef' }}>
                                            <div>
                                                <p className="small text-muted mb-1">Дата закінчення абонементу</p>
                                                <p className="mb-0">15 липня 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Container>
    )
}

export default Account