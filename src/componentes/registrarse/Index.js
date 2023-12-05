import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../imgs/certas/uai__2___1_-removebg-preview.png';

const Register = () => {
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Image src={Logo}
                                    style={{ width: '300px', height: '300px' }}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Col></Col>
                    <Col xs={10} style={{  }}>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">


                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control placeholder="Nome Completo" />
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control placeholder="Senha    " />
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>AC</option>
                                    <option>AL</option>
                                    <option>AP</option>
                                    <option>AM</option>
                                    <option>BA</option>
                                    <option>CE</option>
                                    <option>DF</option>
                                    <option>ES</option>
                                    <option>GO</option>
                                    <option>MA</option>
                                    <option>MT</option>
                                    <option>MS</option>
                                    <option>MG</option>
                                    <option>PA</option>
                                    <option>PB</option>
                                    <option>PR</option>
                                    <option>PE</option>
                                    <option>PI</option>
                                    <option>RJ</option>
                                    <option>RN</option>
                                    <option>RS</option>
                                    <option>RO</option>
                                    <option>RR</option>
                                    <option>SC</option>
                                    <option>SP</option>
                                    <option>SE</option>
                                    <option>TO</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Label>Foto de Perfil</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                name="file"
                            />

                            <div className="d-flex justify-content-between mx-3 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="/esqueciminhasenha">Esqueceu a Senha?</a>
                            </div>

                            <Button variant="primary" className='mb-4'>Registrar-   se</Button>{' '}


                            <div className="text-center">
                                <p>Faça login por:</p>

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
};

export default Register;
