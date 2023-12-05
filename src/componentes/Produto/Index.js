import React, { useState } from 'react';
import Menu from '../menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tommorow from '../imgs/download.png'
import Button from 'react-bootstrap/Button';
import tenda from '../imgs/certas/cobertura-geodesica.jpg';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBTypography,
    MDBTextArea,
    MDBCardHeader,
} from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';
import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

const OffCanvasExample = ({ show, handleClose, handleShow, ...props }) => (
    <>
        <Button variant="primary" onClick={handleShow} className="me-2" style={{ width: '30%', marginLeft: '70%' }}>
            Chat
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Chat</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee", outerHeight: '100%' }}>
                    <MDBRow>
                        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                            <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                                Member
                            </h5>

                            <MDBCard>
                                <MDBCardBody>
                                    <MDBTypography listUnStyled className="mb-0">
                                        <li
                                            className="p-2 border-bottom"
                                            style={{ backgroundColor: "#eee" }}
                                        >
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">John Doe</p>
                                                        <p className="small text-muted">
                                                            Consegue atender na minha região
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Just now</p>
                                                    <span className="badge bg-danger float-end">1</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Danny Smith</p>
                                                        <p className="small text-muted">
                                                            Estão disponíveis para montagem
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">5 mins ago</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Alex Steward</p>
                                                        <p className="small text-muted">
                                                            Agradeço pela atenção
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Ashley Olsen</p>
                                                        <p className="small text-muted">
                                                            Preciso até sexta
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Kate Moss</p>
                                                        <p className="small text-muted">
                                                            Como funcionaria
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2 border-bottom">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Lara Croft</p>
                                                        <p className="small text-muted">
                                                            Tempo de entrega?
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">Yesterday</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="p-2">
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        alt="avatar"
                                                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"
                                                    />
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">Brad Pitt</p>
                                                        <p className="small text-muted">
                                                            Muito Obrigado
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="small text-muted mb-1">5 mins ago</p>
                                                    <span className="text-muted float-end">
                                                        <MDBIcon fas icon="check" />
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                    </MDBTypography>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" lg="7" xl="8">
                            <MDBTypography listUnStyled>
                                <li className="d-flex justify-content-between mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        alt="avatar"
                                        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                                        width="60"
                                    />
                                    <MDBCard>
                                        <MDBCardHeader className="d-flex justify-content-between p-3">
                                            <p className="fw-bold mb-0">Brad Pitt</p>
                                            <p className="text-muted small mb-0">
                                                <MDBIcon far icon="clock" /> 12 mins ago
                                            </p>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <p className="mb-0">
                                                Creio que seria o ideal para o nosso evento, pois o lugar é muito bonito e casa com a vibe que queremos passar no nosso evento
                                                muito bacana mesmo
                                            </p>
                                        </MDBCardBody>
                                    </MDBCard>
                                </li>
                                <li class="d-flex justify-content-between mb-4">
                                    <MDBCard className="w-100">
                                        <MDBCardHeader className="d-flex justify-content-between p-3">
                                            <p class="fw-bold mb-0">Lara Croft</p>
                                            <p class="text-muted small mb-0">
                                                <MDBIcon far icon="clock" /> 13 mins ago
                                            </p>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <p className="mb-0">
                                                Conseguimos marcar uma visita para o começo da semana, tudo bem? ai vocês podem verificar nossas instalações onde ficaria melhor o som, verificar banheiros e garantir que o nosso local comporte a quantidade de pessoas esperadas para o evento de vocês
                                            </p>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                        alt="avatar"
                                        className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                                        width="60"
                                    />
                                </li>
                                <li className="d-flex justify-content-between mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        alt="avatar"
                                        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                                        width="60"
                                    />
                                    <MDBCard>
                                        <MDBCardHeader className="d-flex justify-content-between p-3">
                                            <p className="fw-bold mb-0">Brad Pitt</p>
                                            <p className="text-muted small mb-0">
                                                <MDBIcon far icon="clock" /> 10 mins ago
                                            </p>
                                        </MDBCardHeader>
                                        <MDBCardBody>
                                            <p className="mb-0">
                                                Certo então, no começo da semana estarei ai e levarei minha equipe para assegurarmos que a festa seja o melhor para todos, muito obrigado.
                                            </p>
                                        </MDBCardBody>
                                    </MDBCard>
                                </li>
                                <li className="bg-white mb-3">
                                    <MDBTextArea label="Message" id="textAreaExample" rows={4} />
                                </li>
                                <MDBBtn color="info" rounded className="float-end">
                                    Send
                                </MDBBtn>
                            </MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Offcanvas.Body>
        </Offcanvas>
    </>
);

const Produto = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    return (
        <div>
            <Menu />
            <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <MDBCard style={{ maxWidth: '80%', marginBottom: '6%' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4' className='d-flex align-items-center justify-content-center'>
                            <MDBCardImage src={tenda} alt='...' fluid style={{ width: '100%', height: '80%' }} />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>Geospace Elite - Cobertura para Eventos</MDBCardTitle>
                                <MDBCardText>
                                    Com um alto nível de elegância a GeoSpace Elite e a mais nova tecnologia de cobertura para seu evento ao ar livre. Esta tenda redefine o
                                    conceito de sofisticação e versatilidade, oferecendo dimensões personalizadas a partir de 20x10 metros para atender às suas necessidades
                                    exclusivas. Além de um designer incomparável que traz exclusividade e bela para seu evento.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    A GeoSpace Elite é projetada com uma atenção cuidadosa aos detalhes, garantindo que cada elemento contribua para a atmosfera sofisticada
                                    do seu evento. Seja durante o dia, aproveitando a luz natural que permeia suas elegantes forma, ou à noite, quando a iluminação
                                    estrategicamente posicionada realça suas características distintivas, a tenda não apenas abriga, mas transforma o espaço, criando uma
                                    experiência memorável para todos os presentes.
                                    <br></br><br></br><br></br>
                                    <ListGroup>
                                        <ListGroup.Item>Design Geospace Avançado</ListGroup.Item>
                                        <ListGroup.Item>Dimensões Personalizadas</ListGroup.Item>
                                        <ListGroup.Item>Montagem e Desmontagem Rápida</ListGroup.Item>
                                        <ListGroup.Item>Mão de obera especializada </ListGroup.Item>
                                        <ListGroup.Item>Esteticamente bonitaa</ListGroup.Item>
                                    </ListGroup>
                                    <br></br>
                                    <br></br>
                                </MDBCardText>
                                <MDBCardText>
                                    <OffCanvasExample
                                        style={{ width: '60%', height: '84%  ' }}
                                        show={showOffcanvas}
                                        handleClose={handleCloseOffcanvas}
                                        handleShow={handleShowOffcanvas}
                                        placement={'end'}
                                    />
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </Container>
        </div>
    );
}

export default Produto;
