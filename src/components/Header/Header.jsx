import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './favicon.ico'

function BrandExample(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='m-auto'>
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {props.titulo}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;