import React from 'react';
import Menu from '../menu/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import card from '../imgs/gin-orloff_dry_gin_1l1-dc8135436024d42ade16855352192116-480-0.jpg';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Anuncios = () => {
    return (
        <div>
            <Menu />

            <Container style={{marginTop: '2%'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '80rem' }}>
                            <Card.Body>
                                <Card.Title>Dashboard</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Adicione, altere e exclua seus anuncios</Card.Subtitle>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Nome do Produto</Form.Label>
                                            <Form.Control placeholder="Nome Produto" />
                                        </Form.Group>

                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Endereço</Form.Label>
                                        <Form.Control placeholder="Rua Tristão Furtado 302" />
                                    </Form.Group>




                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridState">
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

                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Cidade</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label>Descrição</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group className="position-relative mb-3">
                                            <Form.Label>File</Form.Label>
                                            <Form.Control
                                                type="file"
                                                required
                                                name="file"
                                            />
                                            <Form.Control.Feedback type="invalid" tooltip>
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                    </Row>

                                    <Button variant="success" style={{ marginLeft: '93%' }}>Registrar</Button>{' '}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '2%'}}>
                <Row style={{width: '100.7%', marginTop: '2%'}} >
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm="3" className="d-flex align-items-center">
                                        <Image src={card} style={{ width: '80px', height: '80px' }} rounded />
                                        <span className="ml-2">Vodka</span>
                                    </Col>
                                    <Col sm="6" className="d-flex align-items-center justify-content-center">
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                    </Col>
                                    <Col sm="3" className="d-flex align-items-center justify-content-end">
                                        <ButtonGroup vertical>
                                            <Button variant="danger">Excluir</Button>
                                            <Button variant="warning">Editar</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row style={{width: '100.7%', marginTop: '2%'}} >
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm="3" className="d-flex align-items-center">
                                        <Image src={card} style={{ width: '80px', height: '80px' }} rounded />
                                        <span className="ml-2">Vodka</span>
                                    </Col>
                                    <Col sm="6" className="d-flex align-items-center justify-content-center">
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                    </Col>
                                    <Col sm="3" className="d-flex align-items-center justify-content-end">
                                        <ButtonGroup vertical>
                                            <Button variant="danger">Excluir</Button>
                                            <Button variant="warning">Editar</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row style={{width: '100.7%', marginTop: '2%'}} >
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm="3" className="d-flex align-items-center">
                                        <Image src={card} style={{ width: '80px', height: '80px' }} rounded />
                                        <span className="ml-2">Vodka</span>
                                    </Col>
                                    <Col sm="6" className="d-flex align-items-center justify-content-center">
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                    </Col>
                                    <Col sm="3" className="d-flex align-items-center justify-content-end">
                                        <ButtonGroup vertical>
                                            <Button variant="danger">Excluir</Button>
                                            <Button variant="warning">Editar</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div >
    );
}

export default Anuncios;