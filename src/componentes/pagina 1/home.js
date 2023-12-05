import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from '../imgs/Vue_de_Raguse.jpg';
import card from '../imgs/gin-orloff_dry_gin_1l1-dc8135436024d42ade16855352192116-480-0.jpg'
import Menu from '../menu/index';
import Figure from 'react-bootstrap/Figure';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tenda from '../imgs/file.jpg';
import Rodape from '../rodapé/Index';
import Palco from '../imgs/169073370264c68c86a8724_1690733702_3x2_xl.jpg';
import Som from '../imgs/Som Pra Festa.jpeg';
import Tenda2 from '../imgs/305760461_402186185376301_1055641053854773735_n.jpg';



const Home = () => {
  return (
    <div>
      <Menu />



      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src={imagem1}
              className="d-block w-100"
              alt="1st slide"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagem1}
              className="d-block w-100"
              alt="2nd slide"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={imagem1}
              className="d-block w-100"
              alt="3rd slide"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>





      <div>
        <h3 className='categorisa'
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Categorias</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-1"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>

            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-2"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>

            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-3"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>

            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-3"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>

            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-3"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>


            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-3"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>


            <Figure className="bebidas" style={{ position: 'relative', textAlign: 'center' }}>
              <Figure.Image
                width={90}
                height={90}
                alt="171x180-3"
                src={card}
              />
              <Figure.Caption style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                Bebidas
              </Figure.Caption>
            </Figure>

          </Stack>

        </div>
      </div>




      <div>
        <h3
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Mais Procurados</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={tenda} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={tenda} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={tenda} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
          </Stack>
        </div>
      </div>




      <div>
        <h3
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Outros</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Palco} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Tenda2} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Som} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
          </Stack>
        </div>
      </div>


      <div>
        <h3
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Som</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Som} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Som} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Som} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
          </Stack>
        </div>
      </div>




      <div>
        <h3
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Tendas</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Tenda2} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Tenda2} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Tenda2} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
          </Stack>
        </div>
      </div>



      <div>
        <h3
          style={{ marginLeft: '30px', marginTop: '30px' }}
        >Palcos</h3>
        <div>
          <Stack direction="horizontal" gap={5}>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Palco} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Palco} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }} className="mx-auto">
              <Card.Img variant="top" src={Palco} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                <Card.Title className="text-center">Tenda 10x10</Card.Title>
                <Card.Text className="text-center">
                  Descrição
                </Card.Text>
                <Button variant="primary">Saber Mais</Button>
              </Card.Body>
            </Card>
          </Stack>
        </div>
      </div>

      <Rodape />

    </div>
  );
}

export default Home;
