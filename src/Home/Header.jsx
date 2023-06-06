import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

  return (
    <div>
          <Navbar bg="light" expand="lg" className='top-sticky' >
      <Container >
          <Navbar.Brand href="/"className='ms-lg-5 text-warning'>Protfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto text-center bg-light font-bold my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll variant="pills"
          >
            <Nav.Link  href="#home" className='mx-2 text-warning'>Home</Nav.Link>
            <Nav.Link  href="#about" className='mx-2 text-warning'>About</Nav.Link>
            <Nav.Link  href="#profile" className='mx-2 text-warning'>Profile</Nav.Link>
            <Nav.Link  href="#protfolio" className='mx-2 text-warning'>Protfolio</Nav.Link>
            <Nav.Link  href="#testimoial" className='mx-2 text-warning'>Testimonial</Nav.Link>
            <Nav.Link  href="#blog" className='mx-2 text-warning'>Blog</Nav.Link>
            <Nav.Link  href="#contact" className='mx-2 text-warning'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;