import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../imgs/certas/uai__2___1_-removebg-preview.png';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Menu from '../menu';
import Tomorrow from '../imgs/Sem título.png';
import Figure from 'react-bootstrap/Figure';
import Gmil from '../imgs/search.png';
import Facebook from '../imgs/facebook.png';
import Outlook from '../imgs/outlook.png';
import Button from 'react-bootstrap/Button';

const esqueciminhasenha = () => {
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Image src={Logo}
                                    style={{ width: '300px', height: '300px', marginTop: '10%' }}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Col></Col>
                    <Col xs={10} style={{ }}>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">


                            <MDBInput wrapperClass='mb-4' id='form1' type='email' placeholder='Email' />


                            <Button variant="primary" className='mb-4' href="/codigo">Enviar Codigo</Button>{' '}


                            <div className="text-center">
                                <p>Não tem conta <a href="/registre-se">Registre-se</a></p>
                                <p>ou fça login por:</p>

                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="171x180-1"
                                            src={Facebook}
                                        />
                                    </Figure>

                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="171x180-2"
                                            src={Gmil}
                                        />
                                    </Figure>
                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                        <Figure.Image
                                            width={50}
                                            height={50}
                                            alt="171x180-2"
                                            src={Outlook}
                                        />
                                    </Figure>


                                </div>
                            </div>

                        </MDBContainer>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default esqueciminhasenha;