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
  ScrollUp,
} from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import ScrollToTop from 'react-scroll-up';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollToTop showUnder={160}>
          <ScrollUp />
        </ScrollToTop>
      </main>
    </>
  );
}

export default Layout;
