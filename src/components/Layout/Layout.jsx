import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  Nav,
  Logo,
  LogoText,
  LogoTextSecond,
  Menu,
  List,
  Container,
} from './Layout.styled';

function Layout() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header>
        <Container>
          <Nav>
            <Logo href="#">
              <LogoText>
                <LogoTextSecond>GOIT</LogoTextSecond>FLIX
              </LogoText>
            </Logo>
            <Menu>
              <List to="/">HOME</List>
              <List to="/movies">MOVIES</List>
              <List to="/tvshows">TV SHOWS</List>
              <List to="/actors">ACTORS</List>
            </Menu>
          </Nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
