import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from '../imgs/Vue_de_Raguse.jpg';
import Menu from '../menu/index';
import Figure from 'react-bootstrap/Figure';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import tenda from '../imgs/file.jpg';
import Rodape from '../rodapé/Index';
import Palco from '../imgs/169073370264c68c86a8724_1690733702_3x2_xl.jpg';
import Tenda2 from '../imgs/305760461_402186185376301_1055641053854773735_n.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SomIcon from '../imgs/icones/caixas-de-som.png';
import Policia from '../imgs/icones/policia.png';
import Transporte from '../imgs/icones/transporte-publico.png';
import Audiovisul from '../imgs/icones/audiovisual.png';
import Aula from '../imgs/icones/aula-online.png'
import Decoracao from '../imgs/icones/decoracao.png';
import Entreterimento from '../imgs/icones/entretenimento.png';
import Estrutura from '../imgs/icones/estrutura.png';
import Festival from '../imgs/icones/festival.png';
import ServicoAlimentcaao from '../imgs/icones/servico-de-alimentacao.png';
import Bebida from '../imgs/icones/icons8-vinho-e-taça-64.png';
import Art from '../imgs/icones/icons8-arte-96.png';
import Brinquedo from '../imgs/icones/icons8-hamster-64.png';
import Limpeza from '../imgs/icones/icons8-limpeza-50.png';
import Palestra from '../imgs/icones/icons8-pódio-com-público-50.png';
import Tenda3 from '../imgs/certas/cobertura-geodesica.jpg'
import Iluminação from '../imgs/certas/pexels-teddy-yang-2263410.jpg';
import EspaçoFestaa from '../imgs/certas/espaco-festas-sp.jpg';
import brinquedos from '../imgs/certas/istockphoto-1366864370-1024x1024.jpg';
import palcos from '../imgs/certas/imagem_2023-12-04_152624953.png';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <div>
      <Menu />




      <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <Row>
          <Col >
            <Carousel >
              <Carousel.Item>
                <img
                  src={Palco}
                  className="d-block w-100"
                  alt="1st slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Iluminação}
                  className="d-block w-100"
                  alt="2nd slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Tenda3}
                  className="d-block w-100"
                  alt="3rd slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <Row>
          <Col>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
              <Stack direction="horizontal" gap={5}>


                <Figure className="Som, palco e iluminação:" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={SomIcon}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Som, iluminação
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Estrutura}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Coberturas, estruturas
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Decoracao}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Decoração, cenografia
                  </Figure.Caption>
                </Figure>


                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={ServicoAlimentcaao}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Catering,  Alimentação
                  </Figure.Caption>
                </Figure>


                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Festival}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Espaços Eventos
                  </Figure.Caption>
                </Figure>


                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Transporte}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Transporte e Logística
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Entreterimento}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Entreterimento
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Audiovisul}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Audiovisual
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Aula}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Plataformas Virtuais
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Policia}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Segurança Emergência
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Palestra}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Workshops e Palestras
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Art}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Arte e Entretenimento
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Limpeza}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Serviços Limpeza
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Brinquedo}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Locação de brinquedos
                  </Figure.Caption>
                </Figure>

                <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180-3"
                    src={Bebida}
                  />
                  <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                    Bebidas
                  </Figure.Caption>
                </Figure>

              </Stack>


            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <h2 style={{ marginBottom: '1%' }}>Mais Vistos</h2>
        <Row >
          <Col>
            <MDBRow>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary" href='/produto'>Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This card has supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Tenda3}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={brinquedos}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={palcos}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Tenda2}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <h2 style={{ marginBottom: '1%' }}>Populares</h2>
        <Row >
          <Col>
            <MDBRow>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Palco}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Tenda2}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This card has supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Tenda3}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Palco}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Tenda2}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </Col>
        </Row>
      </Container>

     <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <h2 style={{ marginBottom: '1%' }}>Outros</h2>
        <Row >
          <Col>
            <MDBRow>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This card has supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={Iluminação}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </Col>
        </Row>
      </Container>

    <Container fluid style={{ maxWidth: '90%', marginTop: '2%' }}>
        <h2 style={{ marginBottom: '1%' }}>Espaço para Festa</h2>
        <Row >
          <Col>
            <MDBRow>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This card has supporting text below as a natural lead-in to additional content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>

              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={EspaçoFestaa}
                    alt='...'
                    position='top'
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      card has even longer content than the first to show that equal height action.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className='text-center'>
                    <small className><Button variant="primary">Saiba Mais</Button>{' '}</small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </Col>
        </Row>
      </Container>

      <Rodape />

    </div>
  );
}

export default Home;
