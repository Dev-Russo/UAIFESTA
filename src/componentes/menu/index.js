import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../imgs/certas/uai__2___1_-removebg-preview.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const OffCanvasExample = ({ show, handleClose, handleShow, ...props }) => (
  <>
    <Button variant="primary" onClick={handleShow} className="me-2" style={{ marginRight: '15px' }}>
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

const Menu = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div>
      <Row >
        <Col>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/"><img src={Logo} style={{ height: '100px' }} alt="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              {/* Move the buttons to the right */}
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                  <Button href="/anuncios" style={{ marginRight: '10px' }}>Meus Anuncios</Button>

                  <OffCanvasExample
                    style={{ width: '60%', height: '84%' }}
                    show={showOffcanvas}
                    handleClose={handleCloseOffcanvas}
                    handleShow={handleShowOffcanvas}
                    placement={'end'}
                  />

                  <DropdownButton id="dropdown-basic-button" title="Meu Perfil">
                    <Dropdown.Item href="#/action-1"><Link to="/meucadastro">Meu Cadastro</Link></Dropdown.Item>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

    </div>
  );
};

export default Menu;
