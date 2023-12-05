import React from 'react';
import { Container, Row, Col, Image, CardBody } from 'react-bootstrap';
import Menu from '../menu/index';
import Perfiil from '../imgs/certas/homem.png';
import Card from 'react-bootstrap/Card';
import card from '../imgs/gin-orloff_dry_gin_1l1-dc8135436024d42ade16855352192116-480-0.jpg';
import Figure from 'react-bootstrap/Figure';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Medalha0 from '../imgs/medalha-de-ouro.png'
import Medalha1 from '../imgs/distintivo.png'
import Medalha2 from '../imgs/medalha-de-ouro (1).png'
import Rodape from  '../rodapé/Index'
import Festival from '../imgs/icones/festival.png';
import ServicoAlimentcaao from '../imgs/icones/servico-de-alimentacao.png';
import Bebida from '../imgs/icones/icons8-vinho-e-taça-64.png';


const Meucadastro = () => {
    return (
        <div>
            <style>
                {`
          body {
            background-color: #fff;
          }

          .addtxt {
            font-size: 13px;
            width: 350px;
            background-color: #e5e8ed;
            font-weight: 500;
          }
          .form-control:focus {
            color: #000;
          }
          .second {
            width: 350px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 10px 10px 5px #aaaaaa;
          }
          .text1,
          .text2,
          .text3,
          .text4 {
            font-size: 13px;
            font-weight: 500;
            color: #56575b;
          }
          .text3o {
            color: #00a5f4;
          }
          .text4i {
            color: #00a5f4;
          }
          .text4o {
            color: white;
          }
          .thumbup {
            font-size: 13px;
            font-weight: 500;
            margin-right: 5px;
          }
          .thumbupo {
            color: #17a2b8;
          }
        `}
            </style>
            <Menu />
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image src={Perfiil}
                                style={{ width: '300px', height: '300px' }}
                                roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{ marginTop: 'px' }}>
                    <Row>
                        <Col>
                            <Container>
                                <Row style={{ marginLeft: '7%' }}>
                                    <Col>
                                        <Card style={{ width: '30rem' }}>
                                            <Card.Body style={{}}>
                                                <Card.Title>Dados Pessoais</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Atualize ou veja seus dados</Card.Subtitle>
                                                <Card.Text>
                                                    <Card.Body>Tomas Hardy</Card.Body>
                                                    <Card.Body>CNPJ</Card.Body>
                                                    <Card.Body>75.706.583/0001-70</Card.Body>
                                                    <Card.Body>Descrição</Card.Body>
                                                    <Card.Body>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                                        has survived not only five centuries, but also the leap into electronic typesetting,
                                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                                        sheets containing Lorem Ipsum passages, and more recently </Card.Body>
                                                </Card.Text>
                                                <Card.Body>Categorias</Card.Body>
                                                <Stack direction="horizontal" gap={5} style={{marginLeft: '3.5%'}}>
                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-1"
                                                            src={Festival}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            Bebidas
                                                        </Figure.Caption>
                                                    </Figure>

                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-2"
                                                            src={ServicoAlimentcaao}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            Bebidas
                                                        </Figure.Caption>
                                                    </Figure>
                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-2"
                                                            src={Bebida}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            Bebidas
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Stack>
                                                <Card.Link href="#">
                                                    <Button style={{ marginTop: '25px', marginLeft: '82%' }} variant="warning">Alterar</Button>{' '}
                                                </Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '30rem' }}>
                                            <Card.Body>
                                                <Card.Title>Prestador de Serviços</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Feedbacks, Selos, Titulos</Card.Subtitle>
                                                <Card.Body>Titulos</Card.Body>
                                                <Stack direction="horizontal" gap={5} style={{ marginLeft: '20%' }}>
                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-1"
                                                            src={Medalha0}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            +100mil Vendas
                                                        </Figure.Caption>
                                                    </Figure>

                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-2"
                                                            src={Medalha1}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            Entrega Rapida
                                                        </Figure.Caption>
                                                    </Figure>
                                                    <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                                                        <Figure.Image
                                                            width={50}
                                                            height={50}
                                                            alt="171x180-2"
                                                            src={Medalha2}
                                                        />
                                                        <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                                                            Qualidade Serviço
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Stack>
                                                <Card.Body style={{ marginTop: '2%' }}>Feedbacks</Card.Body>
                                                <CardBody>
                                                    <div class="container ">
                                                        <div class="d-flex py-2">
                                                            <div class="second py-2 px-2"> <span class="text1">Muito bom os produtos oferecidos</span>
                                                                <div class="d-flex justify-content-between py-1 pt-2">
                                                                    <div><img src={Perfiil} width="18" height="18" /><span class="text2">Martha</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex  py-2">
                                                            <div class="second py-2 px-2"> <span class="text1">Melhor tenda da minha vida</span>
                                                                <div class="d-flex justify-content-between py-1 pt-2">
                                                                    <div><img src={Perfiil} width="18" /><span class="text2">Curtis</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex py-2">
                                                            <div class="second py-2 px-2"> <span class="text1">Melhor palco que já tive a experiencia de usa</span>
                                                                <div class="d-flex justify-content-between py-1 pt-2">
                                                                    <div><img src={Perfiil} width="18" height="18" /><span class="text2">Beth</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex py-2 pb-3">
                                                            <div class="second py-2 px-2"> <span class="text1">Type your note, and hit enter to add it</span>
                                                                <div class="d-flex justify-content-between py-1 pt-2">
                                                                    <div><img src={Perfiil} width="18" /><span class="text2">Curtis</span></div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex py-2 pb-3">
                                                            <div class="second py-2 px-2"> <span class="text1">Type your note, and hit enter to add it</span>
                                                                <div class="d-flex justify-content-between py-1 pt-2">
                                                                    <div><img src={Perfiil} width="18" /><span class="text2">Curtis</span></div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </CardBody>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Rodape />
            </div>
        </div>
    );
}

export default Meucadastro;
